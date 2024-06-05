import { fireEvent, render, screen } from '@testing-library/react';
import { GifExpertApp } from '../GifExpertApp';

describe('Prueba sobre GifExpertApp', () => {
  // 15 a 20 mins -->no probar lo que ya se ha probado
  test('Debe de hacer match con el snapshot ', () => {
    const { container } = render(<GifExpertApp />);
    expect(container).toMatchSnapshot();
  });

  test('Debe ver input categoria repetida', () => {
    render(<GifExpertApp />);
    const form = screen.getByRole('form');
    const input = screen.getByRole('textbox');
    fireEvent.input(input, { target: { value: 'Bankai Bleach' } });
    fireEvent.submit(form);
    fireEvent.input(input, { target: { value: 'Bankai Bleach' } });
    fireEvent.submit(form);

    expect(
      screen
        .getAllByLabelText('h3')
        .filter((p) => p.innerHTML === 'Bankai Bleach').length,
    ).not.toBeGreaterThan(1);
  });
});
