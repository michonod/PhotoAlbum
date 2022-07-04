import React, { useState } from "react";
import styles from "../styles/Modal.module.css";
import Button from "./Button";
import completeIcon from "../assets/svg/completeIcon.svg";

const Modal = ({ onCancel, onSave }) => {
  const buttonStyle = { border: "none", pointerEvents: "none", padding: "0px" };
  const [focused, setFocused] = useState(false);

  const focusHandler = () => setFocused(true);
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.buttonsTop}>
          <Button style={buttonStyle}>Create new album</Button>
          <Button style={buttonStyle}>Add to existing</Button>
        </div>
        <input
          className={styles.input}
          type="text"
          placeholder="Enter title here"
          onFocus={focusHandler}
        />
        {focused && (
          <img
            src={completeIcon}
            className={styles.completeIcon}
            alt="Complete icon"
          />
        )}
        <div className={styles.buttonsBottom}>
          <Button color="white" style={{ width: "140px" }} onClick={onCancel}>
            Cancel
          </Button>
          <Button color="black" style={{ width: "140px" }} onSave={onSave}>
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
