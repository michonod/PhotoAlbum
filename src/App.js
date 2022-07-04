import "./App.css";
import Home from "./Home";
import Header from "./components/Header";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import ImagesPage from "./components/ImagesPage";
import ImageDetails from "./components/ImageDetails";
import { UserContext } from "./helpers/UserContext";
import { useEffect, useState } from "react";
import { getImagesData } from "./helpers/getImagesData";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const data = await getImagesData();
      setData(data);
    };
    getData();
    setLoading(false);
  }, []);

  return (
    <UserContext.Provider value={data}>
      <Header>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/images"
              element={loading ? <h1>Loading...</h1> : <ImagesPage />}
            />
            <Route
              path="/images/:id"
              element={loading ? <h1>Loading...</h1> : <ImageDetails />}
            />
          </Routes>
        </Router>
      </Header>
    </UserContext.Provider>
  );
}

export default App;
