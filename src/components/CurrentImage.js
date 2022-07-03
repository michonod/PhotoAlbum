import styles from "../styles/ImageCard.module.css";

const CurrentImage = ({ image, author, date }) => {
  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        <button>Add to album +</button>
        <button>Download</button>
      </div>
      <div className={styles.main}>
        <img src={image} alt={"fdfs"} />
        <span>Uploaded by</span>
        <span>{author}</span>
        <span>{date}</span>
        <button>Go back</button>
      </div>
    </div>
  );
};

export default CurrentImage;
