const ImageCard = ({ url, altName, likes }) => {
  return (
    <div>
      <img src={url} alt={altName} />
      <p>Likes: {likes}</p>
    </div>
  );
};

export default ImageCard;
