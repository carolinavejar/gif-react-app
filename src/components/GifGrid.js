import React  from 'react';
import { useFetchGIF } from './hooks/useFetchGIF';
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGIF(category);

    return (
        <>
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
