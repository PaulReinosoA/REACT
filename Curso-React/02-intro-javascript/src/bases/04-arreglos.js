//Arreglos en JS

//const arreglo = new Array(100); Es una form pero no es l adecuada
//arreglo.push(1)

const arreglos =[1,2,3,4];

//arreglos.push(1)
//arreglos.push(2)
//arreglos.push(3)
//arreglos.push(4)
//arreglos.push(5)

let arreglos2=[...arreglos,5];

const arreglos3=arreglos2.map(
    (x)=>{ 
        return x*2
    }

)

console.log(arreglos);
console.log(arreglos2);
console.log(arreglos3);








