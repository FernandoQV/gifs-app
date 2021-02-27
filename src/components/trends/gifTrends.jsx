import React from "react";
import useTrends from "hooks/useTrends";
import Gif from "components/gif/Gif";
import Loading from "components/loading/loading";
import styled from "styled-components";

const ContainerGif = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  min-height: 100vh;
  background-color:red;
`;
const GifTrends = () => {
  const { loading, gifTrends } = useTrends();

  return loading ? (
    <Loading />
  ) : (
    <ContainerGif>
      {gifTrends.map((gif) => (
        <Gif key={gif.id} id={gif.id} title={gif.title} url={gif.url} />
      ))}
    </ContainerGif>
  );
};

export default GifTrends;
