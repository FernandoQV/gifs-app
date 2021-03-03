import React from 'react'
import { API_KEY } from "settings/apiKey";
import { APIR_URL } from "settings/apiUrl";

const getSingleGif = ({id}) => {
    return fetch(`${APIR_URL}/gifs/${id}?api_key=${API_KEY}`)
    .then(res=>res.json())
    .then(r=>{
        const {data}=r
        const {title,id,images}=data
        const {url}=images.downsized_medium
        return {id,title,url}
    })
}

export default getSingleGif
