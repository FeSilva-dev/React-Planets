import React, { Fragment } from 'react'

const Description = (props) => {
    return(
        <Fragment>
            <p>{props.description}</p>
            <p><a href={props.url}>Mais Informações</a></p>
        </Fragment>
    )
}

export default Description