import React from "react";
import styles from "../styles/ImageCard.module.css";

const ImageCard = ({ src }) => {
  return (
    <div className={styles.container}>
      <img src={src} />
      <span>Add to album</span>
    </div>
  );
};

export default ImageCard;
