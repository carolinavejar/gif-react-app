import { shallow } from "enzyme"
import { AddCategory } from "../../components/AddCategory"
import React from 'react';

describe(' Pruebas en componente <AddCategory',()=> {
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories = {setCategories} />);

    beforeEach(()=>{
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories = {setCategories} />);
    })
    test('debe mostrarse correctanmente', ()=> {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe cambiar input', () => {
        
        const value = 'Hola mundo'
        wrapper.find('input').simulate('change', { target : {value : value}});
        expect(wrapper.find('p').text()).toBe(value);
    });

    test('no debe postear informacion con submit', () =>{
        wrapper.find('form').simulate('submit', { preventDefault(){}});
        expect(setCategories).not.toHaveBeenCalled();
    });

    test('debe llamar setCategories y limpiar caja de texto ', () => {
        const value = "Carito";
        wrapper.find('input').simulate('change', { target : {value}});

        wrapper.find('form').simulate('submit', { preventDefault(){}});

        expect(setCategories).toHaveBeenCalled();
        expect(wrapper.find('input').prop('value')).toBe('');
    })   
})