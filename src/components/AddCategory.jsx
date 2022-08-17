import { useState } from "react"


export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        //if que no permite insertar espacios vacios
        if( inputValue.trim().length <=  1) return;
        // setCategories( (categories) => [...categories, inputValue]);
        onNewCategory( inputValue.trim());
        //Limpiar imput despues de insertar
        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text" 
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ (event) => onInputChange(event) }
            />
        </form>
  )
}
