import React from "react";
import styles from "../styles/ImageCard.module.css";

const ImageCard = ({ src, alt, onClick }) => {
  return (
    <div className={styles.container} onClick={onClick}>
      <img src={src} alt={alt} />
      <span>Add to album</span>
    </div>
  );
};

export default ImageCard;
