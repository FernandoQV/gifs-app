import { API_KEY } from "settings/apiKey"
import { APIR_URL } from "settings/apiUrl"


export const getTrendsToday =async () => {
    const query=`${APIR_URL}/trending/searches?api_key=${API_KEY}`;
    return await fetch(query)
    .then(resp=>resp.json())
    .then(response=>{
        const {data}=response
        return data
    })
}
