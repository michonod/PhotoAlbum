import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../helpers/UserContext";
import styles from "../styles/ImageDetails.module.css";
import Button from "./Button";
import Modal from "./Modal";
import { saveAs } from "file-saver";
import Notification from "./Notification";

const ImageDetails = () => {
  let { id } = useParams();
  const { data } = useContext(UserContext);
  const [visible, setVisible] = useState(false);
  const [notification, setNotification] = useState(false);
  const findImage = data.find((item) => item.id === id);

  const hideModal = () => setVisible(false);

  const downloadImage = async () => {
    const downloadResult = await fetch(findImage.download_url);
    const blob = await downloadResult.blob();
    saveAs(blob, `${findImage.url}.jpg`);
  };

  const notificationHandler = (showNotification) =>
    setNotification(showNotification);

  useEffect(() => {
    if (notification) {
      setTimeout(() => {
        setNotification(false);
      }, 4000);
    }
  }, [notification]);

  return (
    <div className={styles.container}>
      {visible && (
        <Modal
          selectedImage={findImage}
          onCancel={hideModal}
          notificationHandler={notificationHandler}
        />
      )}
      <div className={styles.buttons}>
        <Button
          color="white"
          style={{ marginRight: "16px" }}
          onClick={() => setVisible(true)}
        >
          Add to album +
        </Button>
        <Button color="black" onClick={downloadImage}>
          Download
        </Button>
      </div>
      <img src={findImage.download_url} alt={findImage?.url} />
      <div className={styles.details}>
        <p>Uploaded by</p>
        <span className={styles.author}>{findImage?.author}</span>
      </div>
      <div className={styles.bottomContainer}>
        <span className={styles.date}>{findImage.date}</span>
        <Button color="white">
          <Link
            to="/images"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            Go back
          </Link>
        </Button>
      </div>
      {notification && <Notification />}
    </div>
  );
};

export default ImageDetails;
