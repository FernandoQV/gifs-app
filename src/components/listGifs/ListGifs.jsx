import React from "react";
import useGifs from "../../hooks/useGifs";
import Gif from "../gif/Gif";
import Loading from "../loading/loading";
import { Container } from "./style";

const ListGifs = ({ keyword }) => {
  const { loading, gifsGlobales } = useGifs({ keyword });

  return loading ? (
    <Loading />
  ) : (
    <Container>
      {gifsGlobales.map((gif) => (
        <Gif key={gif.id} id={gif.id} title={gif.title} url={gif.url} />
      ))}
    </Container>
  );
};
export default ListGifs;
