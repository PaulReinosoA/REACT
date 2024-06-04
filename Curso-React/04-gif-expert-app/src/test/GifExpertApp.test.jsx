import { fireEvent, render, screen } from '@testing-library/react';
import { GifExpertApp } from '../GifExpertApp';

describe('Prueba sobre GifExpertApp', () => {
  // 15 a 20 mins -->no probar lo ay probado
  test('debe ver formulario, input categoria repetida, etc.. snapshot', () => {
    render(<GifExpertApp />);

    const input = screen.getByRole('textbox');
    fireEvent.input(input, { target: { value: 'Saitama' } });
    expect(input.value).toBe('Saitama');
  });

  test('debe de hacer match con el snapshot ', () => {
    const { container } = render(<GifExpertApp />);
    expect(container).toMatchSnapshot();
  });

  test('debe ver input categoria repetida', () => {
    render(<GifExpertApp />);
    const form = screen.getByRole('form');
    const input = screen.getByRole('textbox');
    fireEvent.input(input, { target: { value: 'Bankai Bleach' } });
    fireEvent.submit(form);
    screen.debug();
    // expect(
    //   screen.getAllByRole('h3').filter((p) => p.nodeName === 'Bankai Bleach')
    //     .length,
    // ).not.toBeGreaterThan(1);
    console.log(
      screen.getAllByLabelText('h3') // iterar.innerHTML,
      // .filter((p) => p.nodeName === 'Bankai Bleach').length,
    );
  });
});
