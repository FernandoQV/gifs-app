import {useState,useEffect, useContext} from 'react'
import ContextGifs from 'context/contextGifs'
import getGifs from 'services/getGifs'

const useGifs = ({keyword}) => {
    const [loading, setLoading] = useState(false)
    const {gifsGlobales,setGifsGlobales}=useContext(ContextGifs)
      useEffect(() => {
        //creamos el objeto con el campor keyword:keyword,pero gracias a la nueva sintaxis de EM6 se puede colocar solo el keyword
        setLoading(true)
        getGifs({ keyword })
        .then(gifs=>{
          setGifsGlobales(gifs)
          setLoading(false)
        })
        }, [keyword,setGifsGlobales])
        
    return {loading,gifsGlobales}
}

export default useGifs
