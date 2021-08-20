import React from 'react';
import "materialize-css/dist/css/materialize.min.css";
import { useState } from 'react/cjs/react.development';

const GifExpertApp = () => {

    // const categories = ['Rihanna', 'Ariana Grande', 'Black Pink'];

    const [categories, setCategories] = useState(['Rihanna', 'Ariana Grande', 'Black Pink']);

    const handleAdd = () => {
        // let category para probar estática
        setCategories(['Denis Roshental', ...categories]);
    }
    return (
        <>
            <h1>GifExpertApp</h1>
            <hr></hr>   
            <button onClick = { handleAdd }> Agregar </button> 
            <ol>
                {
                    categories.map( (category) => {
                        return <li key = {category}> {category} </li>
                    })
                }
            </ol>
        </>
       
    );
}

export default GifExpertApp;