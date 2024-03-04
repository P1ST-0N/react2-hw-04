import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ items, onModalOpen }) => {
  return (
    <ul className={css.gallery}>
      {items.map((item) => (
        <li
          key={item.id}
          className={css.galleryItem}
          onClick={() => {
            onModalOpen(item);
          }}
        >
          <ImageCard item={item} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;

// {
//   items.map((item) => {
//     return (
//       <ImageCard
//         key={item.id}
//         url={item.urls.small}
//         altName={item.alt_description}
//         likes={item.likes}
//       />
//     );
//   });
// }

// {
//   items &&
//     items.map(({ id, webformatURL, largeImageURL }) => (
//       <ImageCard
//         key={id}
//         webformatURL={webformatURL}
//         largeImageURL={largeImageURL}
//       />
//     ));
// }

{
  /* <li key={item.id}>
            <ImageCard
              url={item.urls.small}
              altName={item.alt_description}
              likes={item.likes}
            />
          </li> */
}
