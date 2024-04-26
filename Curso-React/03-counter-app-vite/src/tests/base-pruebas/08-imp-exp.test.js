import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";

describe('pruebas 08-imp-exp.test', () => {

    test('getHeroById debe de retornar Heroe por ID ', () => {
        
        const id=1;
        const hero = getHeroeById(id);
        console.log(hero);

        expect(hero).toEqual({id: 1,name: 'Batman',owner: 'DC'});
        
    });

    test('getHeroesByOwner debe de retornar Heroe por ID ', () => {
        
        const owner = 'DC'
        const heroes =getHeroesByOwner(owner);
        console.log(heroes);

        expect(heroes.length).toEqual(3);

        expect(heroes.filter((heroe) => heroe.owner === 'DC')).toEqual(heroes);

        expect(heroes.filter((heroe) => heroe.name === 'Batman')[0]).toEqual({id: 1,name: 'Batman',owner: 'DC'});
        expect(heroes.filter((heroe) => heroe.name === 'Superman')[0]).toEqual({id: 3,name: 'Superman',owner: 'DC'});
        expect(heroes.filter((heroe) => heroe.name === 'Flash')[0]).toEqual({id: 4,name: 'Flash',owner: 'DC'});


        const ownerM = 'Marvel'
        const heroesM =getHeroesByOwner(ownerM);
        
        expect(heroesM.length).toEqual(2);

        expect(heroesM.filter((heroe) => heroe.owner === 'Marvel')).toEqual(heroesM);

    });

});






