// import React from 'react';
// import { shallow } from 'enzyme';
import { getGifs } from '../../../components/helpers/getGifs';

describe("Pruebas de Gif Grid Item", ()=> {

    test('debe traer 10 elementos', async() => {
        const gifs = await getGifs('Heisenberg');
        expect (gifs.length).toBe(10);
    });

    test('debe traer 0 elementos', async() => {
        const gifs = await getGifs('');
        expect (gifs.length).toBe(0);
    });

})