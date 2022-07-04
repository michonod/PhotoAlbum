import React, { useEffect, useState } from "react";
import ImageCard from "./ImageCard";
import classes from "../styles/ImagesPage.module.css";
import { getImagesData } from "../helpers/getImagesData";
import { Link } from "react-router-dom";

const ImagesPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getImagesData();
      setData(data);
    };
    getData();
  }, []);

  return (
    <div className={classes.container}>
      {data.map((item) => (
        <div className={classes.item} key={item.id}>
          <Link to={item.id}>
            <ImageCard src={item.download_url} alt={item.author} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ImagesPage;
