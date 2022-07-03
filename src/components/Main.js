import React from "react";
import styles from "../styles/Main.module.css";
import Button from "./Button";

const Main = ({ formSubmit }) => {
  const buttonStyle = { width: " 140px", margin: " 40px auto" };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Join our stock community!</h1>
      <p className={styles.description}>
        Download free photos and videos powered by the best photographers
      </p>
      <form className={styles.form} onSubmit={formSubmit}>
        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Enter username here ..." />
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Enter password here ..." />
        <Button type="submit" color="black" style={buttonStyle}>
          Log in
        </Button>
      </form>
    </div>
  );
};

export default Main;
