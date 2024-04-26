import PropTypes from 'prop-types';
//import {Fragment} from 'react'

//Un nodo padre es un Fragmento o <>
//pues varios elementos html necesitan agrupadores 
//<> es un fragmento sin neceidad de la importacion

//<!--debe ser una exprecion y no un objeto
const newMessaje =[1,2,3,4,5,6,7];

const newMessajeObj = {
    message:'Hola mundo',
    title:'Fernando'
};

const getMessage = ()=>{
    return 'Saludo Paul soy una funcion()!!!'
}

const getResult = (a,b)=>{
    return a * b;
}

//Las funciones no van dentro del functional component 
//a no ser que sean casoso como eventos de botones etc,
//o funciones que necesiten estar dentor del functional component
/*
export const FirstApp = ( props ) => {
    //console.log(props)//son un canal de comunicacion entre el Comp. padre del app//desestructura simepre
   
    return (
        <>
            <h1>FIRST APP</h1>
            <h1>{ props.title }</h1>  
            <h1>{ props.subtitle }</h1>  
            <h1>{ 2+5 }</h1>             
            <code>{ JSON.stringify(newMessajeObj)  }</code>
            <h1>{ newMessaje }</h1>
            <p>{ getResult(4,3) }</p>
            <p>{ getMessage() }</p>
            <p>Soy el subtitulo</p>
        </>
    )
}*/


export const FirstApp = ( {title,subtitle,name } ) => {
    //console.log(props)//son un canal de comunicacion entre el Comp. padre del app//desestructura simepre
   
    return (
        <>
            <h1>FIRST APP</h1>
            <h1>{ title }</h1>  
            <h1>{ subtitle }</h1> 
            <p>{ name }</p>

        </>
    )
}

FirstApp.propTypes = {
    title:PropTypes.string.isRequired,
    subtitle:PropTypes.number.isRequired,
};

FirstApp.defaultProps = {
    
    //title :'No hay titulo',
    subtitle : 0,    
    name : 'Paul Reinoso'
};




