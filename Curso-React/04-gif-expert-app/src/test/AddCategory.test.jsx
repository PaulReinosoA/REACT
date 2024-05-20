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
    const onSendNewCategory = jest.fn(); // simula la funcion(not work)
    render(<AddCategory onSendNewCategory={onSendNewCategory} />);
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');
    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);
    screen.debug();
    // expect(input.value).toBe('');
    expect(onSendNewCategory).toHaveBeenCalled();
    // expect(onSendNewCategory).not.toHaveBeenCalled(1);
    // expect(onSendNewCategory).toHaveBeenCalledTimes(1);
  });
});