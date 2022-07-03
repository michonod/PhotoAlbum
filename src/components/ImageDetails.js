import React, { useState } from "react";
import styles from "../styles/ImageDetails.module.css";
import Button from "./Button";
import Modal from "./Modal";

const ImageDetails = ({ setDetails, onImageClick }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className={styles.container}>
      {visible && <Modal />}
      <div className={styles.buttons}>
        <Button
          color="white"
          style={{ marginRight: "16px" }}
          onClick={() => setVisible(true)}
        >
          Add to album +
        </Button>
        <Button color="black">Download</Button>
      </div>
      <img src={onImageClick.url} alt={onImageClick.url}></img>
      <div className={styles.details}>
        <p>Uploaded by</p>
        <span className={styles.author}>{onImageClick.author}</span>
      </div>
      <div className={styles.bottomContainer}>
        <span className={styles.date}>{onImageClick.date}</span>
        <Button color="white" onClick={() => setDetails(false)}>
          Go back
        </Button>
      </div>
    </div>
  );
};

export default ImageDetails;
