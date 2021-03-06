import React, { useContext } from "react";
import styles from "../styles/Main.module.css";
import Button from "./Button";
import { Link } from "react-router-dom";
import { UserContext } from "../helpers/UserContext";

const Main = ({ formSubmit }) => {
  const buttonStyle = { width: " 140px", margin: " 40px auto" };

  const { setShowDropdown } = useContext(UserContext);
  const logInHandler = () => setShowDropdown(true);

  return (
    <>
      <div className={styles.container} id="miki">
        <h1 className={styles.title}>Join our stock community!</h1>
        <p className={styles.description}>
          Download free photos and videos powered by the best photographers
        </p>
        <form className={styles.form} onSubmit={formSubmit}>
          <label htmlFor="username">Username</label>
          <input type="text" placeholder="Enter username here ..." />
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Enter password here ..." />
          <Link to="/images">
            <Button
              type="submit"
              color="black"
              style={buttonStyle}
              onClick={logInHandler}
            >
              Log in
            </Button>
          </Link>
        </form>
      </div>
    </>
  );
};

export default Main;
