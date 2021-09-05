import React from 'react';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGIF } from '../../components/hooks/useFetchGIF';
jest.mock('../../components/hooks/useFetchGIF');
describe('Pruebas componente GifGrid', () =>{
    const cat = "Rihanna";
    // const wrapper = shallow(<GifGrid category = {cat}  />);

    test('debe hacer match con snapshop', () => {
        useFetchGIF.mockReturnValue({
            data : [],
            loading: true
        });
        const wrapper = shallow(<GifGrid category = {cat}  />);
        expect (wrapper).toMatchSnapshot();
    });

    test('debe mostrar cuando se cargan imagenes', () => {
        const imgs = [{
            id: '1',
            url: 'https://url.del.gif',
            title: 'Titulo GIF'
        }]
        useFetchGIF.mockReturnValue({
            data : imgs,
            loading: false
        });
        const wrapper = shallow(<GifGrid category = {cat}  />);
        expect (wrapper).toMatchSnapshot();
    });
})
