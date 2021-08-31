import { shallow } from "enzyme"
import { AddCategory } from "../../components/AddCategory"
import React from 'react';

describe(' Pruebas en componente <AddCategory',()=> {
    const setCategories = () => {};
    const wrapper = shallow(<AddCategory setCategories = {setCategories} />);

    test('debe mostrarse correctanmente', ()=> {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe cambiar input', () => {
        const input = wrapper.find('input');
        const value = 'Hola mundo'
        input.simulate('change', { target : {value : value}});

        expect(wrapper.find('p').text()).toBe(value);
    })
})