import { render, getAllByAltText } from "@testing-library/react";
import { FirstApp } from "../FirstApp";


describe('Pruebas sobre  <FirstApp />', () => {
    //COMENTAMOS POR QUE EL SNAPSHOT GENERA MUCHOS CONFLICTOS EN DESARROLLO
    // test('debe de hacer match con el snapshot ', () => {
        
    //     const title = 'Hola, soy Goku';
    //     const { container } =render( <FirstApp  title = { title } /> ); //RENDER -->>ACTUALIZA EL OBJETO SCREEN
    //                                                //RENDER -->> RETORNA UN OBJETO QUE EXPONE PROPIEDADES UNA DE ELLAS ES (CONTAINER)--->>> NODO DE HTML
    //                                                //(CONTAINER)--->>> NODO DE HTML
    //     //console.log(container);
    //                                                //ASERCIONES ---> aseguramos que el proiducto del componente no cambie a futuro
    //     expect( container ).toMatchSnapshot();

    // })


    test('Debe mostrar el titulo en un h1 ', () => {
        

        const title = 'Hola soy, Goku';
        const { container,getByText,getByTestId } =render( <FirstApp  title = { title } /> );

        expect( getByText(title) ).toBeTruthy()//asegura que exista ese titulo

        // const h1 = container.querySelector('h1');
        // //console.log(h1.innerHTML);
        // expect(h1.innerHTML).toContain(title);

        expect(getByTestId('test-title')).toBeTruthy(); //confirmo existencia
        expect(getByTestId('test-title').innerHTML).toBe(title); //asegura que sean identicos
        expect(getByTestId('test-title').innerHTML).toContain(title); //asegura que este contenido
    })

    test('debe mostarr el subtitulo enviado pro porps ', () => {
        
        const title = 'Hola soy, Goku';
        const subtitle = 'Hola soy, un sub titulo';
        const { getAllByText } = render(
         <FirstApp  
                title = { title } 
                subtitle = { subtitle } 
        /> 
        );

        expect( getAllByText(subtitle).length ).toBe(2);

    });
    
    
});
