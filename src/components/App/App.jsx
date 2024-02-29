import { useEffect, useState } from "react";
import axios from "axios";

import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";

import "./App.module.css";

function App() {
  const accessKey = "k9kpNJyVvFboSrbIRzaVdaeBi6TsPMLBriqEUPLwSX8";
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const searchImages = async (newQuery) => {
    setQuery(newQuery);
    setArticles([]);
    setPage(1);
  };

  useEffect(() => {
    if (query === "") {
      return;
    }

    async function fetchData() {
      try {
        setError(false);
        setLoading(true);

        const { data } = await axios.get(
          `https://api.unsplash.com/search/photos?client_id=${accessKey}&page=1&query=${query}&per_page=12`
        );

        setArticles((prevArticles) => [...prevArticles, ...data.results]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }

      const response = await axios.get(
        `https://api.unsplash.com/photos/?client_id=${accessKey}`
      );
      setArticles(response.data.hits);
    }
    fetchData();
  }, [query, page]);

  return (
    <>
      <div>
        <SearchBar onSearch={searchImages} />

        <ImageGallery items={articles} />
      </div>
    </>
  );
}

export default App;
