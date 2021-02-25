import React from "react";
import { Link } from "wouter";

import { Container } from "./style";

export const TrendsToday = ({ categories }) => {
  return (
    <Container>
      {categories.map((categorie, index) => (
        <Link to={`/gifs/${categorie}`} key={index}>
          {categorie}
        </Link>
      ))}
    </Container>
  );
};
