import React from "react";
import { useLocation } from "wouter";
import { Container } from "./style";
const Gif = ({ id, title, url }) => {
    const pushLocation=useLocation()[1]
    const handleIdGif = (event) => {
    event.preventDefault();
        pushLocation(`/gif/${id}`)
  };
  return (
    <Container>
      <img onClick={handleIdGif} src={url} alt={title} />
      <h4>{title}</h4>
      <h5>{id}</h5>
    </Container>
  );
};

export default Gif;
