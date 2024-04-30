import React from 'react'
import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
    //Los Hooks no deben usarse condicionalmente es decir no se acrgan dependiendo una condicion
    const [categories , setcategories] = useState(['One Punch','Dragon ball']);
    //console.log(categories)//esto es un arreglo
    
    const onAddCategory=(newCategory)=>{
        //const categoryUno = 'Jujutsu-Kaisen';
        //setcategories( categories.push(categoryUno) ); esto muta el estado y debe evitarce por esto el error
        if(categories.includes(newCategory)) return//valido repetidos.

        setcategories( [newCategory, ...categories] );//se recomienda desestructurar
    }

    return (
        <>
            {/*Titulo*/}
            <h1>GifExpertApp</h1>

            {/* Input --->>> deben seguir principio de resposabilidad unica por esto creamos un nuevo componente*/}
            <AddCategory 
                //setcategories={ setcategories }
                onSendNewCategory ={ (event)=>{onAddCategory(event)}}
                //onSendNewCategory ={ onAddCategory }
            />

            {/* Listado de Gifs */}            
            {/*<button onClick={ (event)=>{onAddCategory(event)} } >Agregar</button>*/}
            
            <ol>
                {
                    categories.map((category)=>{
                        return <li key={ category }>{ category }</li>
                    })
                }                
            </ol>
            {/* GifItem */}
        </>
        //oJHDZPbqIEavBSoj37exjyFUzbE48RL7
    )
}
