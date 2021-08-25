import React , { useState, useEffect } from 'react';
import { GifGridItem } from './GifGridItem';
import { getGifs } from '../helpers/getGIFs';

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs(category)
        .then( (res) => {
            setImages(res) 
        });
    }, [ category ]);
    // ejecuta el código de arriba solo la primera vez que se renderiza

    return (
        <>
            {
                images.map( (img) => 
                    <GifGridItem 
                        key = { img.id }
                        { ...img }
                    >

                    </GifGridItem>
                )
            }
        </>
    )
}
