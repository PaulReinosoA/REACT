import { getHeroeById,getHeroeByOwner } from "./bases/08-import-exp";
//promesas en javascript

//resolve otro callback
//respuesta ceundo algo falla
const promesa = new Promise((resolve,reject)=>{
    setTimeout(() => {
        const heroe=getHeroeById(2)
        //console.log('2 seg, despues',heroe)
        resolve(heroe)
        reject('No hay heroe')
    }, 2000);
});

//promesa.then //fue correcto
//promesa.catch //fue INcorrecto
//promesa.finally //se ejecuta al final del then o cathc

promesa.then((heroe)=>{
console.log('heroe',heroe)
}).catch(err=>console.warn(err))

//TAREA
const getHeroById=(Id)=>{

    return new Promise((resolve,reject)=>{

        setTimeout(() => {
            const hero = getHeroeById(Id);
            if(hero === undefined) 
                reject('No existe el heroe');
            else
                resolve(hero);
        }, 2000);
    })
}

getHeroById(11)
.then((hero)=>{ console.log('Heroe',hero)})
.catch(err => console.error(err))
.finally( console.info('TODO OK  :)') )
