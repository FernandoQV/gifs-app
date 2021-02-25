import React from "react";
import ListGifs from "components/listGifs/ListGifs";
import Nav from "components/nav/Nav";

const SearchGifs = ({ params }) => {
  const { keyword } = params;
  return (
    <div>
      <section>
        <Nav />
        <h1>{decodeURI(params.keyword)}</h1>
      </section>
      <ListGifs keyword={keyword} />
    </div>
  );
};

export default SearchGifs;
