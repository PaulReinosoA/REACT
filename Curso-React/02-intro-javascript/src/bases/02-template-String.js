console.log('templates strings');

const nombre = 'paul'; 
const apellido = 'reinoso'; 

const nombrecompleto=nombre+' '+apellido;
console.log(nombrecompleto);

const nombrecompleto2=`${nombre}  ${apellido} con templateString` 
console.log(nombrecompleto2);

//sirve para mejor identacion y saltos de linea
const nombrecompleto3=`
${nombre} 
${apellido} 
${1+1}
con templateString` 
console.log(nombrecompleto3);


function getSaludo(nombre){
    return 'hola mundo!' + nombre;
}

//cualquier valor no especificdo o retornado explicitamente envia un undefine
console.log(`Esto es un saludo: ${getSaludo(nombre)}`);





