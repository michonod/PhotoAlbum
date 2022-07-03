import React from "react";
import classes from "../styles/Button.module.css";

const Button = ({ children, type, color, style, onClick }) => {
  return (
    <button
      className={`${classes.button} ${
        color === "black" ? classes.blackButton : classes.whiteButton
      }`}
      type={type}
      style={style}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
