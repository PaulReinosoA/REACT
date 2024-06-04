import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../components/AddCategory';

describe('Prueba sobre AddCategory', () => {
  test('Debe cambiar  el valor de la caja de text', () => {
    render(<AddCategory onSendNewCategory={() => {}} />);
    const input = screen.getByRole('textbox');
    fireEvent.input(input, { target: { value: 'Saitama' } });
    expect(input.value).toBe('Saitama');
    // screen.debug();
  });

  test('Debe de llamar onNewCategory si el input tiene un valor ', () => {
    const inputValue = 'Saitama';
    const onSendNewCategory = jest.fn(); // simula la funcion(works)
    render(<AddCategory onSendNewCategory={onSendNewCategory} />);
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');
    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);
    screen.debug();
    // expect(input.value).toBe('');
    expect(onSendNewCategory).toHaveBeenCalled();
    // expect(onSendNewCategory).toHaveBeenCalledTimes(1);
    expect(onSendNewCategory).toHaveBeenCalledWith(`${inputValue}`);
  });

  test('No debe llamar onSendNewCategory si el input esta vacio', () => {
    const onSendNewCategory = jest.fn(); // simula la funcion(works)
    render(<AddCategory onSendNewCategory={onSendNewCategory} />);
    const form = screen.getByRole('form');
    fireEvent.submit(form);
    expect(onSendNewCategory).not.toHaveBeenCalled();
  });
});
