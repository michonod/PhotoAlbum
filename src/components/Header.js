import React, { useState, useContext } from "react";
import styles from "../styles/Header.module.css";
import logo from "../assets/svg/headerLogo.svg";
import DropdownButton from "./DropdownButton";
import { UserContext } from "../helpers/UserContext";

const Header = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const dropdownHandler = () => setVisible((prevState) => !prevState);
  const buttonStyle = {
    borderColor: "white",
    background: "black",
    color: "white",
  };

  const { showDropdown } = useContext(UserContext);

  return (
    <div>
      <div className={styles.container} style={{ position: "relative" }}>
        <img src={logo} alt="logo" className={styles.logo} />
        {showDropdown && (
          <div
            style={{
              position: "absolute",
              top: "15px",
              right: "300px",
            }}
          >
            <DropdownButton
              title="My albums"
              color="black"
              style={buttonStyle}
              onClick={dropdownHandler}
              visible={visible}
              setVisible={setVisible}
            />
          </div>
        )}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Header;
