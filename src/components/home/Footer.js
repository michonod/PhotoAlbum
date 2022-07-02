import React from "react";
import styles from "../../styles/home/Footer.module.css";
import footerImage from "../../assets/svg/footerImage.svg";

const Footer = () => {
  return (
    <div className={styles.container}>
      <img src={footerImage} alt="footerImage" className={styles.footerImage} />
      <div className={styles.footer}></div>
    </div>
  );
};

export default Footer;
