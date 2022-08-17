import { useState } from "react";
import { AddCategory, GifGrid } from "./components";
//rafc comando para crear rapido funcion react

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = ( newCategory ) => {

    //Busca si el valor a ingresar existe en el arreglo
    if( categories.includes( newCategory)) return;

    //Forma de agregar a un arreglo tambien
    setCategories([ newCategory, ...categories]);
  }

  return (
    <>
      {/* Titulo */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory onNewCategory={ onAddCategory }/>

      {/* Listado de Gif */}
      {
        categories.map( category => (
          <GifGrid 
            key={ category } 
            category={category}
          />
        ))
      }
    </>
  )
}


