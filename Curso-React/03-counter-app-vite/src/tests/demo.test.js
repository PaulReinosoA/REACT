
describe('Pruebas! en <DemoComponent/>', () => {

    test('Esta prueba no debe fallas',()=>{

        //1.-Inicializacion
        const messageUno='Hola Mundo';

        //2.-Estimulo
        const messageDos=messageUno.trim();    
        
        //3.-Observar el comportamiento.. esperado
        expect(messageUno).toBe(messageDos);
    });
})


