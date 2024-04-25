//desestructuracion
//asigancion desestructurante

const persona={
    edad:28,
    nombre:'Paul',
    clave:'1231'
}


const {nombre:nombre2}=persona; //extraemos del objeto lo que deseamos en las llaves

console.log(persona.edad)
console.log(persona.nombre)
console.log(persona.clave)

console.log(nombre2)

const retornaPerson=(usuario)=>{
    console.log(usuario)

    const {edad,clave,nombre} =persona;
    console.log(edad,clave,nombre)
}
retornaPerson(persona)

//obtengo los valores con desestructuracion

const retornaPerson1=({edad,clave,nombre})=>{

    console.log(edad,clave,nombre)
}
retornaPerson1(persona)


const retornaPerson2=({edad,clave,nombre,rango='capitan'})=>{//si no existe la propiedad en el objeto la usa por defeto o usa si hubiera parametro la del parametro

    console.log(edad,clave,nombre,rango)
}
retornaPerson2(persona)


const userContext=({clave,nombre,edad,rango='Capitan'})=>{

    return{
        nombreClave:clave,
        anios:edad,
        latlon:{
            lat:21312.1241,
            long:555555.1241,
        }
    }

}

/* const avenger=userContext(persona)
const {nombreClave:nombreClave,anios:anios}=avenger
console.log(nombreClave,anios) */

/* const {nombreClave,anios,latlon}=userContext(persona)
console.log(nombreClave,anios,latlon) */



const {nombreClave,anios,latlon:{lat,long}}=userContext(persona)
console.log(nombreClave,anios,lat,long)



