import "./App.css";
import Home from "./Home";
import Header from "./components/Header";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import ImagesPage from "./components/ImagesPage";
import ImageDetails from "./components/ImageDetails";
import { UserContext } from "./helpers/UserContext";
import { useEffect, useState } from "react";
import { getImagesData } from "./helpers/getImagesData";
import Album from "./components/Album";
import { getDate } from "./helpers/getDate";
import { v4 } from "uuid";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [albums, setAlbums] = useState([
    { name: "My album one", photos: [], date: getDate, id: v4() },
  ]);

  console.log(albums);

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const data = await getImagesData();
      setData(data);
    };
    getData();
    setLoading(false);
  }, []);

  const values = { data, albums, setAlbums };

  return (
    <UserContext.Provider value={values}>
      <Router>
        <Header>
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
            <Route path="/album/:id" element={<Album />} />
          </Routes>
        </Header>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
