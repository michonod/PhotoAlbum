import React from "react";
import styles from "../styles/ImageCard.module.css";

const ImageCard = ({ src, alt, onClick, text, color }) => {
  return (
    <div className={styles.container} onClick={onClick}>
      <img src={src} alt={alt} />
      <span style={{ backgroundColor: color, cursor: "pointer" }}>{text}</span>
    </div>
  );
};

export default ImageCard;
