import React, { useContext } from "react";
import Button from "./Button";
import styles from "../styles/DropdownButton.module.css";
import { UserContext } from "../helpers/UserContext";
import { Link } from "react-router-dom";

const DropdownButton = ({
  color,
  visible,
  onClick,
  title,
  style,
  setVisible,
}) => {
  const { albums } = useContext(UserContext);
  return (
    <div className={styles.dropdown}>
      <div className={styles.button}>
        <Button color={color} onClick={onClick} style={style}>
          {title}
        </Button>
      </div>
      {visible && (
        <div className={styles.content}>
          {albums.map((item, index) => {
            const linkName = item.name.replace(/\s+/g, "");
            return (
              <Link
                to={`/album/${linkName}`}
                className={styles.aTag}
                key={index}
              >
                <p onClick={() => setVisible(false)}>{item.name}</p>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
