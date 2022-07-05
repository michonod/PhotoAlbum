import React from "react";
import styles from "../styles/Album.module.css";
import Button from "./Button";
import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import ImageCard from "./ImageCard";
import { UserContext } from "../helpers/UserContext";
const Album = () => {
  const { albums, setAlbums } = useContext(UserContext);

  let { id } = useParams();

  const selectedAlbum = albums.find(
    (item) => item.name.replace(/\s+/g, "") === id
  );

  return (
    <div className={styles.container}>
      <h2>{selectedAlbum.name}</h2>
      <p>Date created: {selectedAlbum.date}</p>
      <div className={styles.album}>
        {selectedAlbum.photos.map((item, index) => (
          <ImageCard src={item} color="red" text="REMOVE" key={index} />
        ))}
      </div>
      <div className={styles.buttonContainer}>
        <Link to="/images">
          <Button color="white" style={{ minWidth: "100px" }}>
            Go back
          </Button>
        </Link>
        <Button color="black" style={{ minWidth: "100px" }}>
          Save
        </Button>
      </div>
    </div>
  );
};

export default Album;
