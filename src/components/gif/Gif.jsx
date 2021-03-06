import React from "react";
import { useLocation } from "wouter";
import { Container } from "./style";
const Gif = ({ id, title, url }) => {
  const pushLocation = useLocation()[1];
  const handleIdGif = (event) => {
    event.preventDefault();
    let pathname = window.location.pathname;
    const path = `/gif/${id}`;
    pathname !== path && pushLocation(path);
  };
  return (
    <Container>
      <img onClick={handleIdGif} style={{cursor:'pointer'}} src={url} alt={title} />
      <h4>{title}</h4>
      <h5>{id}</h5>
    </Container>
  );
};

export default React.memo(Gif,(prevProps,nextProps)=>{
  return prevProps.id===nextProps.id
});
