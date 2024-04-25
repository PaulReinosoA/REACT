//import {heroes} from './data/hero' //cremaos nosotros el path

import heroes,{ owners } from '../data/hero' //import por defecto, y normal

//import { heroes } from "./data/heroes";//importamos con el mobre del archivo y enter

//import {heroes} from './data/heroes' //imp y tab

//Solo retorna un elemento
export const getHeroeById=(id)=>{
    return heroes.find( (heroes)=> heroes.id === id)
}

//console.log(getHeroeById(2));

//Retorna todos los que cumplan elemento
export const getHeroeByOwner = (owner)=>{
    return heroes.filter( (heroes)=> heroes.owner === owner)
}
//console.log(getHeroeByOwner('DC'));

//console.log(owners);
