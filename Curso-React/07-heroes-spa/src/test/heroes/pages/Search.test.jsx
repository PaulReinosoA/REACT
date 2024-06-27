import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { Search } from '../../../heroes/pages/SearchPage';

describe('Pruebas sobre Search', () => {
  const mockedUseNavigate = jest.fn();
  // uso el hook mediante este mook
  jest.mock('react-router', () => ({
    ...jest.requireActual('react-router'), // esparce toda la exportacion de la libreria
    useNavigate: () => mockedUseNavigate, // empleo la ruta del hook asi reescribpo la llamda cada vez
  }));

  beforeEach(() => jest.clearAllMocks());

  test('Debe de mostrarce correctamente con valores por defecto', () => {
    const { container } = render(
      <MemoryRouter>
        <Search />
      </MemoryRouter>,
    );
    // screen.debug();
    expect(container).toMatchSnapshot();
  });

  test('Debe de mostrarce BATMAN Y EL INPUT CON EL QUERY/STRING', () => {
    render(
      <MemoryRouter initialEntries={['/search?q=batman']}>
        <Search />
      </MemoryRouter>,
    );
    const input = screen.getByRole('textbox');
    expect(input.value).toBe('batman');
    const img = screen.getByRole('img');
    expect(img.src).toContain('dc-batman.jpg');
    expect(
      screen.getByLabelText('displayNoneShowErrorSearch').style.display
    ).toBe('none');
  });

  test('debe de mostrar un error si no se encuentra el hero ', () => {
    render(
      <MemoryRouter initialEntries={['/search?q=xxx123']}>
        <Search />
      </MemoryRouter>,
    );
    // screen.debug();
    expect(
      screen.getByLabelText('displayNoneShowErrorSearch').style.display
    ).not.toBe('none');
  });

  test('debe de llamar el navigate a la pantalla nueva', () => {
    render(
      <MemoryRouter initialEntries={['/search']}>
        <Search />
      </MemoryRouter>,
    );

    const input = screen.getByRole('textbox');
    fireEvent.change(input, {
      target: { name: 'searchText', value: 'superman' },
    });
    // screen.debug();
    const form = screen.getByLabelText('form');
    fireEvent.submit(form);
    expect(mockedUseNavigate).toHaveBeenCalledWith('?q=superman');
  });
});
