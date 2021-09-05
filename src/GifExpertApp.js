import React from 'react';
import "materialize-css/dist/css/materialize.min.css";
import { useState } from 'react/cjs/react.development';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = ({defaltCategories = []}) => {

    const [categories, setCategories] = useState(defaltCategories);

    return (
        <>
            <div className = "container">
                <h1>GifExpertApp</h1>
                <AddCategory setCategories = { setCategories }></AddCategory>
                <hr></hr>   
                    {
                        categories.map( (category) => 
                            <GifGrid 
                                category = { category }
                                key = { category }
                            >
                            </GifGrid>
                        )
                    }
            </div>
        </>
       
    );
}

export default GifExpertApp;