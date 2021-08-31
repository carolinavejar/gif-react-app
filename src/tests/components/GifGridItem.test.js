import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe("Pruebas de Gif Grid Item", ()=> {
    const title = `Titulo`;
    const url = `https://localhost:3000`;
    const wrapper = shallow(<GifGridItem title = {title}  url = {url} />);

    test('debe de mostrar <GifGridItem /> correctamente', () => {
        expect (wrapper).toMatchSnapshot();
    });

    test('debe tener parrafo con un title', () => {
        const p = wrapper.find('.card-title');
        expect (p.text().trim()).toBe(title);
    });

    test('debe tener imagen igual a la url y alt de props ', () => {
        const img = wrapper.find('img');
        expect (img.prop('src')).toBe(url);
        expect (img.prop('alt')).toBe(title);
    });

    test('debe tener la clase animate__bounce', () => {
        const div = wrapper.find('div.animate__bounce').exists();
        expect (div).toBe(true);

        // const div = wrapper.find('div').exists();
        // const className = div.prop('className');
        // expect (className.includes('animate__bounce')).toBe(true);
        // ASI LO REALIZÓ EL PROFESOR
    });

})