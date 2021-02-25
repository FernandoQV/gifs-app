import React, { useContext } from 'react'
import Gif from '../components/gif/Gif'
import ContextGifs from 'context/contextGifs'

const GifDetails = ({params}) => {
   const {gifsGlobales}=useContext(ContextGifs)
   const gif=gifsGlobales.find(singleGif=>singleGif.id===params.id)
    return <Gif {...gif}/>
}

export default GifDetails
