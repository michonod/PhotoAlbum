import React from "react";
import Footer from "./components/Footer";
import Main from "./components/Main";

const Home = ({ formSubmit }) => {
  return (
    <>
      <Main formSubmit={formSubmit} />
      <Footer />
    </>
  );
};

export default Home;
