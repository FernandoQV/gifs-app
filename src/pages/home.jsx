import React from "react";
import Nav from "components/nav/Nav";
import GifTrends from "components/trends/gifTrends";
import { LazyTrendsToday } from "components/trendsToday/trendsToday";
import SearchForm from 'components/searchForm/searchForm'
import { SEO } from "components/SEO/SEO";
const Home = () => {
  return (
    <>
    <SEO title={'Home | Giphy'} description={'Home, Giphy, App'}/>
    <div>
      <SearchForm/>
      <section>
        <h1>Trends Gifs</h1>
        <Nav />
      </section>
      <GifTrends />
      <LazyTrendsToday />
    </div>
    </>
  );
};

export default Home;
