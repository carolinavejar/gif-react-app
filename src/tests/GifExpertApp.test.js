import React from 'react';
import { shallow } from 'enzyme';
import  GifExpertApp  from '../GifExpertApp';


describe("Pruebas de GifExpertApp", ()=> {
    test('debe de mostrar <GifExpertApp /> correctamente', () => {
        const wrapper = shallow(<GifExpertApp />);
        expect (wrapper).toMatchSnapshot();
    });

    test('debe mostrar lista de categorias', () => {
        const categories = ['Rihanna', 'Ariana'];
        const wrapper = shallow(<GifExpertApp defaltCategories = {categories} />);
        expect (wrapper).toMatchSnapshot();
        expect ((wrapper).find('GifGrid').length).toBe(categories.length);
    });

})