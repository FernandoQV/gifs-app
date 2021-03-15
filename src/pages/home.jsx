import React from "react";
import Nav from "components/nav/Nav";
import GifTrends from "components/trends/gifTrends";
import { LazyTrendsToday } from "components/trendsToday/trendsToday";
import SearchForm from 'components/searchForm/searchForm'
const Home = () => {
  return (
    <div>
      <SearchForm/>
      <section>
        <h1>Trends Gifs</h1>
        <Nav />
      </section>
      <GifTrends />
      <LazyTrendsToday />
    </div>
  );
};

export default Home;
