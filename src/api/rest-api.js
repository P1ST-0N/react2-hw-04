import axios from "axios";

const YOUR_ACCESS_KEY = "k9kpNJyVvFboSrbIRzaVdaeBi6TsPMLBriqEUPLwSX8";
export const fetchImages = async (query, page) => {
  axios.defaults.baseURL = "https://api.unsplash.com";

  const response = await axios.get("/search/photos", {
    params: {
      query,
      client_id: YOUR_ACCESS_KEY,
      page,
      per_page: 12,
    },
  });
  return response.data.results;
};
