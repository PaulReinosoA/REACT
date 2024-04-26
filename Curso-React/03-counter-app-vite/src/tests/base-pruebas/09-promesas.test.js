import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas";

describe('Pruebas 09-promesas Name of the group', () => {

    test('getHeroeByIdAsync debe retornar un heroe ', (done) => {
        
        const id = 1;;        
        getHeroeByIdAsync(id)
        .then(hero => {
           
            expect(hero).toEqual({
                id: 1,
                name: 'Batman',
                owner: 'DC'
            });

            done();
        });

        
    });


    test('getHeroeByIdAsync debe retornar un error ', (done) => {
        
        const id = 1000;        
        getHeroeByIdAsync(id)
        .then(hero =>{ 
            expect(hero).toBeFalsy()
            done();
        })
        .catch(error => {           
            expect(error).toBe('No se pudo encontrar el héroe');
            done();
        });        
    });

});


