import { CounterApp } from "../CounterApp";
import { render, screen, fireEvent } from "@testing-library/react";


describe('Pruebas sobre CounterApp', () => {
    
    test('debe de hacer match con el snapshot ', () => {
        
        const { container } = render(<CounterApp value={20} />)
        expect(container).toMatchSnapshot();
        //console.log(container)
    })
    
    test('debe de mostarr el valor inicial de 100 ', () => {
      
        const initValue = 100;
        render(<CounterApp value={initValue} />)
        
        expect(screen.getByText(initValue).innerHTML).toBeTruthy();;
    })

    test('debe de incrementar con el boton +1 ', () => {
        
        const initValue = 10;
        render(<CounterApp value = { initValue } />)
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByText('11')).toBeTruthy()
    });

    test('debe de idecrementar con el boton +1 ', () => {
        
        const initValue = 10;
        render(<CounterApp value = { initValue } />)
        fireEvent.click(screen.getByText('-1'));//ejecuta el evento
        expect(screen.getByText('9')).toBeTruthy()
    });
    
    //El useState no se debe evaluar, solo se evaluan las interaccionjes de ese hook

    test('debe de funcionar el boton +1  ', () => {
      
        const initValue = 512;
        render(<CounterApp value = { initValue } />)
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        
        //screen.debug();
        //fireEvent.click(screen.getByText('Reset'));
        fireEvent.click(screen.getByRole('button',{name: 'btn-Reset'}));
        expect(screen.getByText(512)).toBeTruthy();

    })
    
});







