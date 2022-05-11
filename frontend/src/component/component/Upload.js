import React, { Fragment } from 'react'

const Upload = ({ upload }) => {
    return (
        <Fragment>
            <h1>{upload.name}</h1>
            <img src={upload.images[0].url} alt={upload.name} />
        </Fragment>
    )
}

export default Upload