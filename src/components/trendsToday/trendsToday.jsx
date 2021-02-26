import React, { useEffect, useState } from "react";
import { getTrendsToday } from "services/getTrendsToday";
import { Link } from "wouter";

import { Container } from "./style";

const TrendsToday = () => {
  const [categories, setCategories] = useState([])
  useEffect(() => {
      getTrendsToday()
      .then(gifs=>setCategories(gifs))
  }, [])
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

export const LazyTrendsToday=()=>{
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onChange=(entries)=>{
      const elemt=entries[0]
      if(elemt.isIntersecting){
        console.log('intersectado');
        setShow(true)
      }else{
        console.log('no intersectado');
      }
    }
    const observer=new IntersectionObserver(onChange,{
      rootMargin:'100px'
    })
    observer.observe(document.getElementById('Lazy'))
  })

  return <div id='Lazy'>{
    show?<TrendsToday/>:null
  }</div>
}