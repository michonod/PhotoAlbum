import React, { useState } from "react";
import styles from "../styles/Header.module.css";
import logo from "../assets/svg/headerLogo.svg";
import Dropdown from "./Dropdown";
import Button from "./Button";

const Header = ({ children, loggedIn }) => {
  // const [visible, setVisible] = useState(false);
  // const dropdownHandler = () => setVisible((prevState) => !prevState);
  // const buttonStyle = { pointerEvents: "none", borderColor: "white" };

  return (
    <div>
      <div className={styles.container}>
        <img src={logo} alt="logo" className={styles.logo} />
        {/* {loggedIn && (
          <Button onClick={dropdownHandler} color="black" style={buttonStyle}>
            My albums
          </Button>
        )}
        {visible && <Dropdown />} */}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Header;
