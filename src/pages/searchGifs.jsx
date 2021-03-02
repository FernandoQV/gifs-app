import React, { useRef } from "react";
import ListGifs from "components/listGifs/ListGifs";
import Nav from "components/nav/Nav";
import useGifs from "hooks/useGifs";
import { useNearScreen } from "hooks/useNearScreen";


const SearchGifs = ({ params }) => {
  const { keyword } = params;
  const externalRef=useRef()
  const {isNearScreen,fromRef}=useNearScreen({externalRef})
  const {setPage,gifsGlobales,loading}=useGifs({keyword})
  const handleNextPage=()=>{
    //cambiando el estado con funcion es para cuando no sabemos o tengamos que importar el valor en si , en este caso seria page
        setPage(p=>p+1)
      }
  return (
    <div>
      <section>
        <Nav />
        <h1>{decodeURI(keyword)}</h1>
      </section>
      <ListGifs gifs={gifsGlobales} loading={loading}/>
      <div id="visor" className='visor' ref={externalRef}></div>{/* el visor sirve para que nos indique cuando estamos al ultimo del contenedor */}
      <button onClick={handleNextPage} style={{borderRadius:'5px',padding:'.5rem',color:'#fffdfd',background:'linear-gradient(to left,hsl(89,75%,30%),hsl(89,95%,10%))'}}>Get next Page</button>
    </div>
  );
};

export default SearchGifs;
