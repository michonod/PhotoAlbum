import React, { useContext, useState } from "react";
import styles from "../styles/Modal.module.css";
import Button from "./Button";
import completeIcon from "../assets/svg/completeIcon.svg";
import { UserContext } from "../helpers/UserContext";
import { getDate } from "../helpers/getDate";
import { v4 } from "uuid";
import Notification from "./Notification";

const Modal = ({ onCancel, onSave, selectedImage, notificationHandler }) => {
  const { setAlbums, albums } = useContext(UserContext);

  const buttonStyle = {
    border: "none",
    padding: "0px",
    backgroundColor: "white",
    color: "black",
  };
  const [focused, setFocused] = useState(false);
  const [showAlbums, setShowAlbums] = useState(false);
  const [value, setValue] = useState("");

  const focusHandler = () => setFocused(true);
  const onAddExisting = () => setShowAlbums(true);
  const onCreateNewAlbum = () => setShowAlbums(false);

  const onFormSubmit = (event) => {
    event.preventDefault();
    setAlbums((state) => [
      ...state,
      {
        name: value.length ? value : "No name album",
        photos: [selectedImage.download_url],
        date: getDate,
        id: v4(),
      },
    ]);

    onCancel();
    notificationHandler(true);
  };
  const changeInputHandler = (event) => {
    setValue(event.target.value);
  };

  const addToExistingAlbum = (album, event) => {
    event.stopPropagation();

    const updatedAlbums = albums.find((item) => item.name === album.name);
    updatedAlbums.photos.push(selectedImage.download_url);

    if (updatedAlbums.length) {
      setAlbums((state) => [...state, { ...updatedAlbums }]);
    }
    onCancel();
    notificationHandler(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.buttonsTop}>
          <Button style={buttonStyle} onClick={onCreateNewAlbum}>
            Create new album
          </Button>
          <Button style={buttonStyle} onClick={onAddExisting}>
            Add to existing
          </Button>
        </div>
        {showAlbums && (
          <div className={styles.albumContainer}>
            {albums.map((item, index) => (
              <p
                className={styles.albumName}
                onClick={(event) => addToExistingAlbum(item, event)}
                key={index}
              >
                {item.name}
              </p>
            ))}
          </div>
        )}
        <>
          <form onSubmit={onFormSubmit}>
            {!showAlbums && (
              <input
                className={styles.input}
                type="text"
                placeholder="Enter title here"
                onFocus={focusHandler}
                value={value}
                onChange={changeInputHandler}
              />
            )}
            <div className={styles.buttonsBottom}>
              <Button
                color="white"
                style={{ width: "140px", marginRight: "10px" }}
                onClick={onCancel}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                color="black"
                style={{ width: "140px" }}
                onSave={onSave}
              >
                Save
              </Button>
            </div>
          </form>
        </>

        {/* {focused && (
          <img
            src={completeIcon}
            className={styles.completeIcon}
            alt="Complete icon"
          />
        )} */}
      </div>
    </div>
  );
};

export default Modal;
