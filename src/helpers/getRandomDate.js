const day = Math.floor(Math.random() * 26) + 1;
const year = Math.floor(Math.random() * 20) + 2000;
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const monthIndex = Math.floor(Math.random() * 10);

export const getRandomDate = () => {
  return `${day}th ${months[monthIndex]} ${year} `;
};
