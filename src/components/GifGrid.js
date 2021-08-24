import React from 'react';
import axios from 'axios';

export const GifGrid = ({ category }) => {

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

            console.log(`Gifs ${gifs}`);
        })
    };

    // Como el curso de udemy
    const getGifsFetch = async () => {
        const api_key = 'URLjL49KyzdscasPa5146vq3CmpIYQjq';
        const cat = 'RIHANNA';
        const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${ api_key }&q=${ cat }&limit=10`);
        const data = await response.json();

        console.log(`data getGifsFetch ${ data }`);
    };

    getGifs();
    return (
        <>
           <h3> {category} </h3>
        </>
    )
}
