import { useState, useEffect, useContext } from "react";
import ContextGifs from "context/contextGifs";
import getGifs from "services/getGifs";

const useGifs = ({ keyword }) => {
  const [loading, setLoading] = useState(false);
  const [loadingNextPage, setLoadingNextPage] = useState(false)
  const { gifsGlobales, setGifsGlobales } = useContext(ContextGifs);
  const [page, setPage] = useState(0);
  useEffect(() => {
    //creamos el objeto con el campor keyword:keyword,pero gracias a la nueva sintaxis de EM6 se puede colocar solo el keyword
    setLoading(true);
    getGifs({ keyword }).then((gifs) => {
      setGifsGlobales(gifs);
      setLoading(false);
    });
  }, [keyword, setGifsGlobales]);

  useEffect(() => {
    if (page === 0) return;
    setLoadingNextPage(true)
    getGifs({ keyword, page }).then((nextGifs) => {
      setGifsGlobales((prevGifs) => prevGifs.concat(nextGifs));
      setLoadingNextPage(false)
    });
  }, [page, keyword,setGifsGlobales]);
  return { loading,loadingNextPage, gifsGlobales, setPage };
};

export default useGifs;
