
const activo = true;

let mensaje = '';

if (activo) {
    mensaje='ACTIVO'
} else {
    mensaje='INACTIVO'
}
console.log(mensaje);

const mensaje2 = (!activo) ? 'ACTIVO': 'INACTIVO';

console.log(mensaje2);

const mensaje3 = activo && 'ACTIVO' //solo retorna si la condicion cumple si caso contrario

console.log(mensaje3); //if-->corto




    
