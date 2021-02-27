import React, { useEffect, useState } from "react";
import { getTrendsToday } from "services/getTrendsToday";
import { Link } from "wouter";
import {Container} from './style'
const TrendsCategories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
      getTrendsToday().then(gifs=>setCategories(gifs));
    },[]);
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

  export default TrendsCategories