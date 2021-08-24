import React from 'react';
import "materialize-css/dist/css/materialize.min.css";
import { useState } from 'react/cjs/react.development';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Rihanna']);

    return (
        <>
            <div className = "container">
                <h1>GifExpertApp</h1>
                <AddCategory setCategories = { setCategories }></AddCategory>
                <hr></hr>   
                <ol>
                    {
                        categories.map( (category) => 
                            <GifGrid 
                                category = { category }
                                key = { category }
                            >
                            </GifGrid>
                        )
                    }
                </ol>
            </div>
        </>
       
    );
}

export default GifExpertApp;