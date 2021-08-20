import React, { useState } from 'react'

export const AddCategory = () => {
    const  [inputValue, setInputValue] = useState('Hola');

    const handleInputChange = (e)=> {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e)=> {
        e.preventDefault();
        console.log(` * * *    handleSubmit    * * * `);;
    }
    return (
        <form onSubmit = { handleSubmit }>
            <input 
                type = "text"
                value =  { inputValue }
                className = "input-field"
                onChange = { handleInputChange }
            />
        </form>
    )
}
