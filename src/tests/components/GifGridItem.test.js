import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe("Pruebas de Gif Grid Item", ()=> {
    test('debe de mostrar <GifGridItem /> correctamente', () => {
        const wrapper = shallow(<GifGridItem />);
        expect (wrapper).toMatchSnapshot();
    })    
})