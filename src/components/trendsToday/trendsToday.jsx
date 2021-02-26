import React, { useEffect, useRef, useState } from "react";
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
  //el useref es similar al useState, lo diferente es que el useRef no renderiza el componente cunado se cambia su valor y se usa mas cuando se tiene que hacer una referencia a un elemento del DOM
  const elementRef = useRef()
  useEffect(() => {
    let observer
    const onChange=(entries,observer)=>{
      const elemt=entries[0]
      if(elemt.isIntersecting){
        setShow(true)
        observer.disconnect()
      }
    }
    Promise.resolve(
      typeof IntersectionObserver != 'undefined'
      ? IntersectionObserver
      :import('intersection-observer')
    ).then(()=>{
       observer=new IntersectionObserver(onChange,{
        rootMargin:'100px'
      })
      observer.observe(elementRef.current)
    })
    return ()=>observer.disconnect()
  })

  return <div ref={elementRef}>{
    show?<TrendsToday/>:null
  }</div>
}