import React, { useEffect, useState } from "react";
import ImageCard from "./ImageCard";
import { getRandomDate } from "../helpers/getRandomDate";

const ImagesPage = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const data = await (
      await fetch("https://picsum.photos/v2/list?limit=12")
    ).json();
    console.log(data);

    const transformedData = data.map((item) => {
      return { ...item, date: getRandomDate() };
    });
    setData(transformedData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <ImageCard src={"https://picsum.photos/id/0/5616/3744"} />
    </div>
  );
};

export default ImagesPage;
