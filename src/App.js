import React, { Suspense } from "react";
import { Route } from "wouter";
import {GifsProvider} from 'context/contextGifs'
import Home from "pages/home";

const SearchGifsLazy=React.lazy(()=>import('pages/searchGifs'))
const GifDetailsLazy=React.lazy(()=>import('pages/gifDetails'))
const App = () => {
  return (
    <GifsProvider >
      <Suspense fallback={null}>
      <Route path="/" component={Home} />
      <Route path="/gifs/:keyword" component={SearchGifsLazy} />
      <Route path="/gif/:id" component={GifDetailsLazy} />
      </Suspense>
    </GifsProvider>
  );
};

export default App;
