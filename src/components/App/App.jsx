import { useEffect, useState } from "react";

import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";

import searchImages from "../../api/rest-api";

// import "./App.module.css";

const App = () => {
  // const accessKey = "k9kpNJyVvFboSrbIRzaVdaeBi6TsPMLBriqEUPLwSX8";
  const [searchValue, setSearchValue] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({});

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const data = await searchImages(searchValue, page);

        setImages((prev) => [...prev, ...data]);
      } catch (error) {
        console.error("Произошла ошибка при загрузке изображений:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    if (searchValue === "") {
      return;
    }
    setLoading(true);
    fetchImages();
  }, [page, searchValue]);

  const onSubmit = (query) => {
    if (query === searchValue) {
      return;
    }
    setSearchValue(query);
    setImages([]);
    setPage(1);
  };

  const onClick = () => {
    setPage(page + 1);
  };

  const onModalOpen = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  const onCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <SearchBar onSubmit={onSubmit} />

      {images.length > 0 && (
        <ImageGallery items={images} onModalOpen={onModalOpen} />
      )}

      {error && <ErrorMessage />}

      {loading && <Loader />}

      {images.length !== 0 && (
        <LoadMoreBtn onClick={onClick}>Load More</LoadMoreBtn>
      )}

      {showModal && (
        <ImageModal onCloseModal={onCloseModal} content={modalContent} />
      )}
    </div>
  );
};

export default App;
