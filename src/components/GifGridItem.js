import React from 'react'
import PropTypes from 'prop-types'
export const GifGridItem = ( {title, url} ) => {
    return (
        <div className = "card animate__animated animate__bounce animate__delay-2s">
            <div className = "card-image">
                <img src= { url} alt = {title}></img> 
                <div className = "card-title">{title} </div>
            </div>
        </div>
    )
}

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}
