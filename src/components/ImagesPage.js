import React, { useEffect, useState } from "react";
import ImageCard from "./ImageCard";
import classes from "../styles/ImagesPage.module.css";
import { getImagesData } from "../helpers/getImagesData";
import ImageDetails from "./ImageDetails";

const ImagesPage = () => {
  const [data, setData] = useState([]);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const data = await getImagesData();
      setData(data);
    };
    getData();
  }, []);

  return (
    <div className={classes.container}>
      {!showDetails &&
        data.map((item) => (
          <div className={classes.item} key={item.id}>
            <ImageCard src={item.download_url} alt={item.author} />
          </div>
        ))}
      {showDetails && <ImageDetails />}
    </div>
  );
};

export default ImagesPage;
