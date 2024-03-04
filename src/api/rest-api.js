import axios from "axios";

const API_KEY = "k9kpNJyVvFboSrbIRzaVdaeBi6TsPMLBriqEUPLwSX8";
const searchImages = async (query, page) => {
  try {
    const response = await axios.get(
      `https://api.unsplash.com/search/photos?client_id=${API_KEY}&page=${page}&per_page=12&query=${query}`
    );
    console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    console.error("Ошибка при запросе данных:", error);
    throw error; // Проброс ошибки для дальнейшей обработки
  }
};

export default searchImages;
