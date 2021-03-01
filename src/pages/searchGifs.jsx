import React from "react";
import ListGifs from "components/listGifs/ListGifs";
import Nav from "components/nav/Nav";
import useGifs from "hooks/useGifs";


const SearchGifs = ({ params }) => {
  const { keyword } = params;
  const {setPage,gifsGlobales,loading}=useGifs({keyword})
  const handleNextPage=()=>{
    //cambiando el estado con funcion es para cuando no sabemos o tengamos que importar el valor en si , en este caso seria page
        setPage(p=>p+1)
      }
  return (
    <div>
      <section>
        <Nav />
        <h1>{decodeURI(params.keyword)}</h1>
      </section>
      <ListGifs gifs={gifsGlobales} loading={loading}/>
      <button onClick={handleNextPage} style={{borderRadius:'5px',padding:'.5rem',color:'#fffdfd',background:'linear-gradient(to left,hsl(89,75%,30%),hsl(89,95%,10%))'}}>Get next Page</button>
    </div>
  );
};

export default SearchGifs;
