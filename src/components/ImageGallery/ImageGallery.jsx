import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ items }) => {
  return (
    <ul>
      {items &&
        items.map(({ id, webformatURL, largeImageURL }) => (
          <ImageCard
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
          />
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
