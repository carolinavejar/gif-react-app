import React from 'react';
import "materialize-css/dist/css/materialize.min.css";
import { useState } from 'react/cjs/react.development';
import { AddCategory } from './components/AddCategory';

const GifExpertApp = () => {

    // const categories = ['Rihanna', 'Ariana Grande', 'Black Pink'];

    const [categories, setCategories] = useState(['Rihanna', 'Ariana Grande', 'Black Pink']);

    // const handleAdd = () => {
    //     // let category para probar estática
    //     setCategories(['Denis Roshental', ...categories]);
    // }

    return (
        <>
            <div className = "container">
                <h1>GifExpertApp</h1>
                <AddCategory setCategories = { setCategories }></AddCategory>
                <hr></hr>   
                <ol>
                    {
                        categories.map( (category) => {
                            return <li key = {category}> {category} </li>
                        })
                    }
                </ol>
            </div>
        </>
       
    );
}

export default GifExpertApp;