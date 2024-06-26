import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
  // Los Hooks no deben usarse condicionalmente es decir no se acrgan dependiendo una condicion
  const [categories, setcategories] = useState(['Bankai Bleach']);
  // console.log(categories)//esto es un arreglo

  const onAddCategory = (newCategory) => {
    // const categoryUno = 'Jujutsu-Kaisen';
    // setcategories( categories.push(categoryUno) ); esto muta el estado y debe evitarce por esto el error
    if (categories.includes(newCategory)) return; // valido repetidos.
    setcategories([newCategory, ...categories]); // se recomienda desestructurar
  };

  // return (
  //     <>
  //         {/*Titulo*/}
  //         <h1>GifExpertApp</h1>

  //         {/* Input --->>> deben seguir principio de resposabilidad unica por esto creamos un nuevo componente*/}
  //         <AddCategory
  //             //setcategories={ setcategories }
  //             onSendNewCategory ={ (event)=>{onAddCategory(event)}}
  //             //onSendNewCategory ={ onAddCategory }
  //         />

  //         {/* Listado de Gifs */}
  //         {/*<button onClick={ (event)=>{onAddCategory(event)} } >Agregar</button>*/}
  //         {/*<ol>*/}
  //             {
  //                 /*categories.map((category)=>{
  //                     return (
  //                         <div key={ category }>
  //                             <h3>{category}</h3>
  //                             <li >{ category }</li>
  //                         </div>
  //                     )
  //                 })*/
  //                 categories.map((category)=>(
  //                     <GifGrid
  //                         key={category}
  //                         category={category} />
  //                     )
  //                 )
  //             }
  //         {/*<ol>*/}
  //         {/* GifItem */}
  //     </>
  //     //oJHDZPbqIEavBSoj37exjyFUzbE48RL7
  // )

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
        onSendNewCategory={(event) => {
          onAddCategory(event);
        }}
      />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
