import { useState } from 'react'  //hook siempre empieza con use
import PropTypes from 'prop-types';
//import React from 'react'

//<button onClick={ (event) => handleAdd(event) }>
//+1
//</button>

export const CounterApp = ({value}) => {

    const [counter,setCounter] = useState(value); //value(20) es el valor inicial del hook

    const handleAdd =()=>{
        setCounter(counter +1)//aviosa que existe un cambio de estado y debe redibujar ese elemento den html
        //setCounter((c) => c+1 )//usamos un callback para manipular el counter
    }

    return (
        <>
        <h1>CounterApp</h1>
        <h2>{counter}</h2>    
        <button onClick={ (event) => handleAdd(event) }>
            +1
        </button>
        </>
    )
}

CounterApp.propTypes={
    value:PropTypes.number.isRequired
}

//NOTA:
/*HOOKS
Los hooks son 

*/