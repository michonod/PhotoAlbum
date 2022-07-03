import "./App.css";
import Home from "./Home";
import Header from "./components/Header";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import ImagesPage from "./components/ImagesPage";
import ImageCard from "./components/ImageCard";

function App() {
  return (
    <>
      <Header>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/images" element={<ImagesPage />} />
            <Route path="/imageCard" element={<ImageCard />} />
          </Routes>
        </Router>
      </Header>
    </>
  );
}

export default App;
