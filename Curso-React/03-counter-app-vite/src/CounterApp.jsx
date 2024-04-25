import PropTypes from 'prop-types';
//import React from 'react'

//<button onClick={ (event) => handleAdd(event) }>
//+1
//</button>


export const CounterApp = ({value}) => {

    function handleAdd(event) { 
        console.log(event)
    }

    return (
        <>
        <h1>CounterApp</h1>
        <h2>{value}</h2>    
        <button onClick={ handleAdd }>
            +1
        </button>
        </>
    )
}

CounterApp.PropTypes={
    value:PropTypes.number.isRequired,
}

