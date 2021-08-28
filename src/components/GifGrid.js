import React  from 'react';
import { useFetchGIF } from './hooks/useFetchGIF';
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGIF(category);

    return (
        <>
        <h3 className = "animate__animated animate__fadeIn"> { category } </h3>
            { loading && <p> Loading ...</p>}
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
