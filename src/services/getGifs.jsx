import { API_KEY } from "settings/apiKey";
import { APIR_URL } from "settings/apiUrl";

const getGifs = async ({ keyword = "code",limit=25,page=0 } = {}) => {
  const query = `${APIR_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${page*limit}&rating=g&lang=en`;
  return await fetch(query)
    .then((res) => res.json())
    .then((response) => {
      const { data } = response;
      const gifs = data.map((gif) => {
        const { id, title, images } = gif;
        const { url } = images.downsized;
        return { id, title, url };
      });
      return gifs;
    });
};

export default getGifs;
