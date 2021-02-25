import React from "react";
import useTrends from "hooks/useTrends";
import Gif from "components/gif/Gif"
import { Container } from "components/listGifs/style";
import Loading from "components/loading/loading";

const GifTrends = () => {
  const { loading, gifTrends } = useTrends();

  return loading ? (
    <Loading />
  ) : (
    <Container>
      {gifTrends.map((gif) => (
        <Gif key={gif.id} id={gif.id} title={gif.title} url={gif.url} />
      ))}
    </Container>
  );
};

export default GifTrends;
