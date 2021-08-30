import React from 'react'
import { shallow } from 'enzyme/build';

import Enzyme from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { createSerializer } from 'enzyme-to-json';

export const GifGridItem = ( {id, title, url} ) => {
    return (
        <div className = "card animate__animated animate__bounce animate__delay-2s">
            <div className = "card-image">
                <img src= { url} alt = {title}></img> 
                <div className = "card-title">{title} </div>
            </div>
        </div>
    )
}
