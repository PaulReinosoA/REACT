import { useState } from 'react'  //hook siempre empieza con use
import PropTypes from 'prop-types';

//<button onClick={ (event) => handleAdd(event) }>
//+1
//</button>
export const CounterApp = ({value}) => {

    console.log('render')//al cambiar el estado el componente se vuelve a ejecutar

    const [counter,setCounter] = useState(value); //value(20) es el valor inicial del hook

    const handleAdd =()=>{
        setCounter(counter +1)//aviosa que existe un cambio de estado y debe redibujar ese elemento den html
        //setCounter((c) => c+1 )//usamos un callback para manipular el counter
    }
    const handleRemove =()=>{
        setCounter(counter -1)//aviosa que existe un cambio de estado y debe redibujar ese elemento den html
        //setCounter((c) => c+1 )//usamos un callback para manipular el counter
    }
    const handleReset =()=>{
        //setCounter(counter +1)//aviosa que existe un cambio de estado y debe redibujar ese elemento den html
        setCounter((c) => c = value )//usamos un callback para manipular el counter
    }

    return (
        <>
        <h1>CounterApp</h1>
        <h2>{counter}</h2>    
        <button onClick={ (event)=>handleAdd(event) }>+1</button>
        <button onClick={ handleRemove }>-1</button>
        <button aria-label="btn-Reset" onClick={ handleReset }>Reset</button>
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