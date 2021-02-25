import { API_KEY } from "../settings/apiKey";
import { APIR_URL } from "settings/apiUrl";

const getTrends = async (limit = 12) => {
  const query = `${APIR_URL}/gifs/trending?api_key=${API_KEY}&limit=${limit}`
  return await fetch(query)
    .then(res => res.json())
    .then(response => {
      const { data } = response;
      const gifs = data.map((gif) => {
        const { id, title, images } = gif;
        const { url } = images.downsized;
        return { id, title, url };
      });
      return gifs;
    })
};

export default getTrends;
