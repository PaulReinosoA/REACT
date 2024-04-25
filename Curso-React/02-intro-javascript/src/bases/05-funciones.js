//funciones


function saludar( nombre ){
    return `Hola, ${nombre}`
}

console.log(saludar('paul'))


const saludo=function saludar( nombre ){
    return `Hola, ${nombre}`
}

console.log(saludo)

const saludo3 = (nombre)=>{
    return `Hola, ${nombre}`

}
console.log(saludo3)


console.log(saludo3('vegueta'))


const saludo4 = (nombre)=>`Hola, ${nombre}`
console.log(saludo4('Goku'))




const getuser = ()=>{
    return {
        uid:'ABC123',
        usaername:'EL_PAUL2109',
    }

}

console.log(getuser())




const getuser2 = ()=>({    
    uid:'ABC123',
    usaername:'EL_PAUL2109',
});

console.log(getuser2())



//Tarea
//1. transforme una funcion flecha
//2. Retorne un objeto implicito
//3.Prueba
function getUsuarioActivo(nombre){
    return{
        uid:'123123',
        username:nombre,
    }

}
const usuarioActivo= getUsuarioActivo('Paul');
console.log(usuarioActivo);

//SOLUCION
const usuarioAct=(nombre)=>({
    uid:'123123',
    username:nombre,
});

console.log(usuarioAct('Paul :3'));