import { getRandomDate } from "./getRandomDate";

export const getImagesData = async () => {
  const data = await (
    await fetch("https://picsum.photos/v2/list?limit=12")
  ).json();

  const transformedData = data.map((item) => {
    return { ...item, date: getRandomDate() };
  });

  return transformedData;
};
