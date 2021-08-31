import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe("Pruebas de Gif Grid Item", ()=> {
    const title = `Titulo`;
    const url = `https://localhost:3000`;
    test('debe de mostrar <GifGridItem /> correctamente', () => {
        const wrapper = shallow(<GifGridItem title = {title}  url = {url} />);
        expect (wrapper).toMatchSnapshot();
    })    ;

})