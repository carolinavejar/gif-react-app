import React from 'react'

export const GifGridItem = ( {id, title, url} ) => {
    return (
        <div className = "card animate__animated animate__bounce animate__delay-2s">
            <div className = "card-image">
                <img src= { url} alt = {title}></img> 
                <div className = "card-title">{title} </div>
            </div>
        </div>
    )
}
