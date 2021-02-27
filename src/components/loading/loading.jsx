import React from 'react'
import {Load} from './style'
import './Loadi.css'
const Loading = () => {
    return (
        <Load>

            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </Load>
    )
}

export default Loading
