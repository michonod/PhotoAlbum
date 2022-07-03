import React, { useState } from "react";
import styles from "../styles/Header.module.css";
import logo from "../assets/svg/headerLogo.svg";
import Dropdown from "./Dropdown";

const Header = ({ children, loggedIn }) => {
  const [visible, setVisible] = useState(false);

  const dropdownHandler = () => setVisible((prevState) => !prevState);
  return (
    <div>
      <div className={styles.container}>
        <img src={logo} alt="logo" className={styles.logo} />
        {loggedIn && (
          <button className={styles.dropdownButton} onClick={dropdownHandler}>
            My albums
          </button>
        )}
        {visible && <Dropdown />}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Header;
