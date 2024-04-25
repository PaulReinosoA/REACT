//Objetos literales

const persona = { //las llaves simbolizan objeto //el prototipe es su adn y tiene varias propiedades

    nombre:'Paul',
    apellido:'Reinoso',
    edad:45,
    direccion:{
        ciudad:'Quito',
        calle1:'Jose E.',
        calle2:'Alverto C.',
    },
}

console.log(persona);

console.table(persona);

console.log(`${persona.edad}${persona.nombre}${persona.apellido}`);


const persona2=persona //esta asignacion copia la referencia en memoria y no es correcto
persona2.nombre='Washington'

console.log(persona2)
console.log(persona)


const persona3 ={...persona} //clona apuntando a otro espacio de memoria
console.log(persona3)

