import { useEffect, useState } from "react";
import axios from "axios";

import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";

// import { fetchImages } from "../../api/rest-api";

import "./App.module.css";

function App() {
  const accessKey = "k9kpNJyVvFboSrbIRzaVdaeBi6TsPMLBriqEUPLwSX8";
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const getImages = async () => {
  //     try {
  //       setLoading(true);
  //       setImages([]);
  //       const imageData = await fetchImages(query, page);
  //       setImages((previmages) => {
  //         return [...previmages, ...imageData];
  //       });
  //     } catch (error) {
  //       setError(true);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   getImages();
  // }, [page, query]);

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

        setImages((previmages) => [...previmages, ...data.results]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }

      const response = await axios.get(
        `https://api.unsplash.com/photos/?client_id=${accessKey}`
      );
      setImages(response.data.hits);
    }
    fetchData();
  }, [query, page]);

  const searchImages = async (newQuery) => {
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <div>
      <SearchBar onSearch={searchImages} />
      {error && <ErrorMessage />}

      {loading && <Loader />}

      <ImageGallery items={images} />
      <LoadMoreBtn onClick={handleLoadMore} />
    </div>
  );
}

export default App;
