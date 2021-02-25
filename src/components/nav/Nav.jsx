import React from "react";
import { LinkPage, Lista } from "./style";

const Nav = () => {
  return (
    <nav>
      <Lista>
        <li>
          <LinkPage to="/">Home</LinkPage>
        </li>
        <li>
          <LinkPage to="/gifs/peru">Los gifs mas buscados de Peru</LinkPage>
        </li>
        <li>
          <LinkPage to="/gifs/rick">Los gifs mas buscados de Rick</LinkPage>
        </li>
        <li>
          <LinkPage to="/gifs/bojack">Los gifs mas buscados de Bojack</LinkPage>
        </li>
        <li>
          <LinkPage to="/gifs/ikki">Los gifs mas buscados de Ikki</LinkPage>
        </li>
      </Lista>
    </nav>
  );
};

export default Nav;
