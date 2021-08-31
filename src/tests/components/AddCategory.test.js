import { shallow } from "enzyme"
import { AddCategory } from "../../components/AddCategory"
import React from 'react';

describe(' Pruebas en componente <AddCategory',()=> {
    const setCategories = () => {};
    test('debe mostrarse correctanmente', ()=> {
        const wrapper = shallow(<AddCategory setCategories = {setCategories} />);
        expect(wrapper).toMatchSnapshot();
    })
})