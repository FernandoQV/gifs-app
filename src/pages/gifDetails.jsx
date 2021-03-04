import React from "react";
import Gif from "../components/gif/Gif";

import useGifs from "hooks/useGifs";
import useSingleGif from "hooks/useSingleGif";
import { Redirect } from "wouter";

const GifDetails = ({ params }) => {
  const { id } = params;
  const { gifSingle, loading, isError } = useSingleGif({ id });
  if (isError) return <Redirect to="/404" />;
  return loading ? <h4>Espera cargando</h4> : <Gif {...gifSingle} />;
};

export default GifDetails;
/*  */