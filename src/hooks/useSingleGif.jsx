
import { useEffect, useState } from 'react'
import getSingleGif from 'services/getSingleGif'
const useSingleGif = ({id}) => {
    const [gifSingle, setGifSingle] = useState({})
    //vamos agregar un loading y un estado que controle un posible error
    const [loading, setLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    useEffect(()=>{
        setLoading(true)
        const gif=getSingleGif({id})
        gif.then(ggi=>{
            setGifSingle({...ggi})
            setLoading(false)
            setIsError(false)
        })
        .catch(err=>{
            setLoading(false)
            setIsError(true)
        })
    
    },[id])
    return {gifSingle,loading,isError}
}

export default useSingleGif
