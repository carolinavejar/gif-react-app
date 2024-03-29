import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
    const  [inputValue, setInputValue] = useState('');

    const handleInputChange = (e)=> {
        setInputValue(e.target.value);
        console.log(`handleInputChange llamado`);
    };

    const handleSubmit = (e)=> {
        e.preventDefault();
        console.log(`handleSubmit llamado`, inputValue );
        if(inputValue.trim().length > 2) {
            setCategories( categories => [ inputValue, ...categories ]);
            setInputValue('');
        }
        
    }

    return (
        <form onSubmit = { handleSubmit }>
            <p>{ inputValue }</p>
            <input 
                type = "text"
                value =  { inputValue }
                className = "input-field"
                onChange = { handleInputChange }
            />
        </form>
    );
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}


