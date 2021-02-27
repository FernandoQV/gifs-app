import React, { useEffect, useRef, useState } from "react";
import { getTrendsToday } from "services/getTrendsToday";
import { Link } from "wouter";

import { Container } from "./style";

const TrendsToday = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getTrendsToday().then((gifs) => setCategories(gifs));
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
const useNearScreen = () => {
  const [isNearScreen, setIsNearScreen] = useState(false);
  const fromRef = useRef();
  useEffect(() => {
    let observer;
    const onChange = (entries,observer) => {
      const elemt = entries[0];
      if (elemt.isIntersecting) {
        setIsNearScreen(true)
        observer.disconnect()
      }
    };
    Promise.resolve(
      typeof IntersectionObserver != "undefined"
        ? IntersectionObserver
        : import("intersection-observer")
    ).then(() => {
      observer = new IntersectionObserver(onChange, {
        rootMargin: "150px",
      });
      observer.observe(fromRef.current);
    });
    return ()=> observer && observer.disconnect()
  });
  return { isNearScreen, fromRef };
};
export const LazyTrendsToday = () => {
  const { isNearScreen, fromRef } = useNearScreen();
  return <div ref={fromRef} className='divlLAzy'>{isNearScreen ? <TrendsToday /> : null}</div>;
};
