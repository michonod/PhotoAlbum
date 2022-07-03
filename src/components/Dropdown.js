import React from "react";
import styles from "../styles/Header.module.css";

const Dropdown = () => {
  return (
    <ul className={styles.dropdown}>
      <li>My Album One</li>
      <li>My Album Two</li>
      <li>My Album Three</li>
      <li>My Album Four</li>
    </ul>
  );
};

export default Dropdown;
