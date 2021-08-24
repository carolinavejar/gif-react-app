import React , { useState, useEffect } from 'react';
import axios from 'axios';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs();
    }, []);
    // ejecuta el código de arriba solo la primera vez que se renderiza

    const getGifs = () => {
        const api_key = 'URLjL49KyzdscasPa5146vq3CmpIYQjq';
        const cat = 'RIHANNA';
        axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${ api_key }&q=${ cat }&limit=10`)
        .then((response) => {
            const { data : { data } } = response;
            const gifs = data.map ( img => {
                return {
                    id: img.id,
                    title: img.title,
                    url: img.images.downsized_medium.url
                }
            });
            setImages(gifs);
        })
    };

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
