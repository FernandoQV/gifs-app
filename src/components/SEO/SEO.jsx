import React from 'react'
import {Helmet} from 'react-helmet'
export const SEO = ({title,description}) => {
    return (
        <Helmet title={title} meta={[{name:'description',
            content:description}]}/>
    )
}
