import React, { useState } from "react";
import { useLocation } from "wouter";


const SearchForm = () => {
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
    </>
  );
};

export default SearchForm;
