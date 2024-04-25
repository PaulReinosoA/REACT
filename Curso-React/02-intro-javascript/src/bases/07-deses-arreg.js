//
const personajes = ['GOKU','VEGUETA','TRUNKS'];

const [ p1 ] = personajes;

console.log(p1);

const [ ,p2 ] = personajes;

console.log(p2);

const [ , , p3 ] = personajes;

console.log(p3);

const retornaArreglo = ()=>{

    return ['ABC',123  ]
}

const [] = retornaArreglo();


const arr = retornaArreglo();

console.log(arr)

//puedo desestructurar para obtener los valores
const [ letras, numeros] = retornaArreglo();

console.log(letras,numeros);

//TAREA
const use = (valor) => {
    return [ valor,()=>{ console.log('Hola Mundo')}];    
}

const arreglos = use('Goku');
console.log(arreglos);

 arreglos[1](); // equivalentes setNombre()

//1. el primer valor del arreglo se llamara nombre
//2. el segundo valor del arreglo se llamara setNombre

const [ nombre, setNombre] = use('Goku');

console.log(nombre);
setNombre()// equivalentes  arreglos[1](); 

