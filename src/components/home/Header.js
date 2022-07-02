import React from "react";
import styles from "../../styles/home/Header.module.css";
import logo from "../../assets/svg/headerLogo.svg";

const Header = () => {
  return (
    <div className={styles.container}>
      <img src={logo} alt="logo" className={styles.logo} />
    </div>
  );
};

export default Header;
