import React from "react";
import { Route } from "wouter";
import {GifsProvider} from 'context/contextGifs'
import GifDetails from "pages/gifDetails";
import Home from "pages/home";
import SearchGifs from "pages/searchGifs";
const App = () => {
  return (
    <GifsProvider >
      <Route path="/" component={Home} />
      <Route path="/gifs/:keyword" component={SearchGifs} />
      <Route path="/gif/:id" component={GifDetails} />
    </GifsProvider>
  );
};

export default App;
