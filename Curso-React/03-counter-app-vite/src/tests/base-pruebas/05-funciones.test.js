import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones";



describe('Purebas de 05-funciones', () => {

    test('getUser() debe retornar un objeto ', () => {

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();        

        //expect(testUser).toStrictEqual( user ) //para comparara obj
        expect(testUser).toEqual( user ) //para comparara obj
    })

    test('getUsuarioActivo() debe retornar un objeto ', () => {
       
        const name = 'Paul'

        const tUser = {
            uid: 'ABC567',
            username: name
            
        };

       const usuarioActivo = getUsuarioActivo(name);

       expect(usuarioActivo).toEqual(tUser);

    });
    
    
});
