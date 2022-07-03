import "./App.css";
import Home from "./Home";
import Header from "./components/Header";
import { useState } from "react";
// import ImageCard from "./components/ImageCard";
import ImagesPage from "./components/ImagesPage";
import Modal from "./components/Modal";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setLoggedIn(true);
  };

  return (
    <div className="App">
      <Header loggedIn={loggedIn}>
        {loggedIn ? <ImagesPage /> : <Home formSubmit={formSubmitHandler} />}
      </Header>
      <Modal />
    </div>
  );
}

export default App;
