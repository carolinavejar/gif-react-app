import React  from 'react';
import { useFetchGIF } from './hooks/useFetchGIF';

export const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([]);
    const { loading } = useFetchGIF();

    return (
        <>
            { loading ? 'cargando ....' : 'cargado'}
            {

            }
        </>
    )
}
