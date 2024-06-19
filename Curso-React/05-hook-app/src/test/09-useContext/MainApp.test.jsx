import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { MainApp } from '../../09-useContext/MainApp';

describe('test sobre <MainApp />', () => {
  test('debe de mostrar el HomePage ', () => {
    render(
      <MemoryRouter>
        <MainApp />
      </MemoryRouter>,
    );
    // screen.debug();
    expect(screen.getByLabelText('h1').innerHTML).toBe('HomePage: ');
    // expect(screen.getByText('HomePage: ')).toBeTruthy();
  });

  test('debe de mostrar el LoginPage ', () => {
    render(
      // initialEntries -> segmento del arreglo en el que me encuentro
      <MemoryRouter initialEntries={['/login']}>
        <MainApp />
      </MemoryRouter>,
    );
    // screen.debug();
    expect(screen.getByLabelText('h1').innerHTML).toBe('LoginPage: MyApp');
    // expect(screen.getByText('HomePage: ')).toBeTruthy();
  });
});
