const date = new Date();

const addZero = (date) => {
  return date < 10 ? `0${date}` : date;
};

const month = addZero(date.getMonth());
const day = addZero(date.getDate());
const year = date.getFullYear();

export const getDate = `${day}th ${month} ${year}`;
