import React, { useEffect, useState } from "react";
import { useLocation } from "wouter";
import Nav from "components/nav/Nav";
import GifTrends from "components/trends/gifTrends";
import { TrendsToday } from "components/trendsToday/trendsToday";
import { getTrendsToday } from "services/getTrendsToday";

const Home = () => {
  const [categories, setCategories] = useState([])
  useEffect(() => {
      getTrendsToday()
      .then(gifs=>setCategories(gifs))
  }, [])
  const [keyword, setKeyword] = useState("");
  const pushLocation = useLocation()[1];
  const handleSumit = (event) => {
    event.preventDefault(); //evita que se refresque la pagina , de mucha utilidad
    pushLocation(`/gifs/${keyword}`);
  };
  const handleChange = (event) => {
    setKeyword(event.target.value);
  };
  return (
    <>
      <form onSubmit={handleSumit}>
        <input onChange={handleChange} type="text" value={keyword}></input>
      </form>
      <div>
        <section>
          <h1>Trends Gifs</h1>
          <Nav />
        </section>

        <GifTrends/>
        <TrendsToday categories={categories}/>
      </div>
    </>
  );
};

export default Home;
