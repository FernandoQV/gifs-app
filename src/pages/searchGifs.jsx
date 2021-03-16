import React, { useCallback, useEffect, useRef } from "react";
import ListGifs from "components/listGifs/ListGifs";
import Nav from "components/nav/Nav";
import useGifs from "hooks/useGifs";
import { useNearScreen } from "hooks/useNearScreen";
import debounce from "just-debounce-it";
import { SEO } from "components/SEO/SEO";

const SearchGifs = ({ params }) => {
  const { keyword } = params;
  const externalRef = useRef();
  const { setPage, gifsGlobales, loading } = useGifs({ keyword });
  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false,
  }); /* para asegurrnos que se pase el parametro de externalRef solo cuando deje de estar cargando el componente */

  const debounceHandleNextPage = useCallback(
    debounce(() => setPage((p) => p + 1), 1000),
    []
  );
  //el debounce necesita dos parametros una es la funcion a evaluar y el otro el tiempo que tiene que observar cuanto tiempo s repite
  useEffect(() => {
    if (isNearScreen) debounceHandleNextPage();
  }, [isNearScreen, debounceHandleNextPage]);

  /* const handleNextPage = () => {
    //cambiando el estado con funcion es para cuando no sabemos o tengamos que importar el valor en si , en este caso seria page
    setPage((p) => p + 1);
  }; */
  return (
    <>
    <SEO title={'Giphy | Buscados'} description={'Gifs, Giphy,Search,Trends'}/>
      <div>
        <section>
          <Nav />
          <h1>El gif encontrado es: {decodeURI(keyword)}</h1>
        </section>
        <ListGifs gifs={gifsGlobales} loading={loading} />
        <div id="visor" className="visor" ref={externalRef}></div>
        {/* el visor sirve para que nos indique cuando estamos al ultimo del contenedor */}
        <button
          style={{
            borderRadius: "5px",
            padding: ".5rem",
            color: "#fffdfd",
            background:
              "linear-gradient(to left,hsl(89,75%,30%),hsl(89,95%,10%))",
          }}
        >
          Get next Page
        </button>
      </div>
    </>
  );
};

export default SearchGifs;
