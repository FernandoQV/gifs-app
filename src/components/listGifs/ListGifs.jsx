import React from "react";
import Gif from "../gif/Gif";
import Loading from "../loading/loading";
import { Container } from "./style";

const ListGifs = ({ gifs,loading }) => {
  return loading ? (
    <Loading />
  ) : (
    <Container>
      {gifs.map((gif) => (
        <Gif key={gif.id} id={gif.id} title={gif.title} url={gif.url} />
      ))}
    </Container>
  );
};
export default ListGifs;
