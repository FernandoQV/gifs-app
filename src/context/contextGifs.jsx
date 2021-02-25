import {createContext, useState} from 'react'
const ContextGifs=createContext({
    name:'sin provider'
})//el objeto inicial es para cuando queramaos utilizar el contexto sin provider


//aca estamos creando el provider para contextGifs
export const GifsProvider=({children})=>{
    const [gifsGlobales, setGifsGlobales] = useState([])
    return <ContextGifs.Provider value={{gifsGlobales,setGifsGlobales}}>
        {children}
    </ContextGifs.Provider>
}

export default ContextGifs
