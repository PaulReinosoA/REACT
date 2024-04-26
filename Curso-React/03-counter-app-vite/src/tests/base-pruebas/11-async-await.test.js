import { getImagen } from "../../base-pruebas/11-async-await";

describe('Pruebas 11-async-await.test', () => {
    
    test('getImagendebe retornar un URL de la imagen ', async () => {
        
        const resp = await getImagen();
        expect(typeof resp).toBe('string');

    });


    test('getImagendebe retornar no se encontro la imagen', async () => {
        
        const resp = await getImagen();
        expect(resp).toBe('no se encontro la imagen');

    });

});












