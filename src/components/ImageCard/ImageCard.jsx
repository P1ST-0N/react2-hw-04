import { useState } from "react";
import Modal from "../ImageModal/ImageModal";

const ImageCard = ({ webformatURL, largeImageURL }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal((state) => !state);

  return (
    <>
      <li onClick={toggleModal}>
        <img src={webformatURL} alt="Search result" />
      </li>
      {showModal && (
        <Modal largeImageURL={largeImageURL} toggleModal={toggleModal} />
      )}
    </>
  );
};

export default ImageCard;

{
  /* <div>
  <img src={url} alt={altName} />
  <p>Likes: {likes}</p>
</div>; */
}
