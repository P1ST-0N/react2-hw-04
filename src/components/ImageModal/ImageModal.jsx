import { useEffect } from "react";

const Modal = ({ largeImageURL, toggleModal }) => {
  useEffect(() => {
    const handleEscClick = (event) => {
      if (event.key !== "Escape") return;

      toggleModal();
    };

    document.addEventListener("keydown", handleEscClick);

    return () => {
      document.removeEventListener("keydown", handleEscClick);
    };
  }, [toggleModal]);

  const handleClick = (event) => {
    if (event.target === event.currentTarget) {
      toggleModal();
    }
  };

  return (
    <div onClick={handleClick}>
      <div>
        <img src={largeImageURL} alt="Search result" />
      </div>
    </div>
  );
};

export default Modal;
