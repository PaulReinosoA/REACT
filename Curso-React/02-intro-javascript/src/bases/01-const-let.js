//Para creacion de proyecto usamos https://create-react-app.dev/
//Con  npx create-react-app my-app, creamos la aplicacion de forma rapida 
//y con npm start la corremos
/*INTRODUCCION*/ 

const nombre = 'Paul'; // varible que no cambia en el tiempo
const apellido = 'Reinoso'; 

let valordado =5 // variable que cambia en el tiempo

console.log(nombre,apellido,valordado);

if(true){       //scope diferente por eso el valor de dado si cambia
    let valordado = 6;
    console.log(valordado);
}
console.log(valordado)  // aqui el valor se mantien
