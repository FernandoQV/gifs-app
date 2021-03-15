import React, { useMemo } from "react";
import Gif from "../components/gif/Gif";
import useSingleGif from "hooks/useSingleGif";
import { Redirect } from "wouter";

const GifDetails = ({ params }) => {
  const { id } = params;
  const { gifSingle, loading, isError } = useSingleGif({ id });
  const element=useMemo(()=><Gif {...gifSingle} />,[gifSingle])
  if (isError) return <Redirect to="/404" />;
  return loading ? <h4>Espera cargando...</h4> : element;
};

export default GifDetails;
/*  */
