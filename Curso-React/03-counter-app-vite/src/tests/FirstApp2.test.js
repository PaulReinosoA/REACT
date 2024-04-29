import { render, screen, getAllByText } from "@testing-library/react";
import { FirstApp } from "../FirstApp";
import { toMatchSnapshot } from "jest-snapshot";


describe('Pruebas sobre  <FirstApp />', () => {

    const title = 'Hola Soy, Goku'
    
    test('Debe comparar el snapshot ', () => {
      
        const {container} = render(<FirstApp title = { title } />);
        expect(container).toMatchSnapshot();
    })
   
    test('Bede mostar el mensaje "Hola soy, Goku" ', () => {

        render(<FirstApp title = { title } />);
        expect(screen.getByText(title)).toBeTruthy(); //El screen -->>> objeto que estamos renderizando 
        screen.debug(); //ultima version actualizadad despues de los cambios del DOM

    });

    test('debe mostrar el titulo en un H1 ', () => {
        
        render(<FirstApp title = { title } />);
        expect(screen.getByRole('heading',{level:1}).innerHTML).toContain(title);  //el roll son elementos html

    })
    
    test('Ddebe de mostarr el subtitulo enviado por props ', () => {
        
        render(
            <FirstApp 
                title = { title } 
                subtitle = { subtitle } 
            />
        );

        expect(screen.getAllByText(subtitle).length).toBe(2);
    })
    
});
