import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { Navbar } from '../../../ui/components/Navbar';
import { AuthContext } from '../../../auth';

const mockedUseNavigate = jest.fn();
// uso el hook mediante este mook
jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'), // esparce toda la exportacion de la libreria
  useNavigate: () => mockedUseNavigate, // empleo la ruta del hook asi reescribpo la llamda cada vez
}));

const contextValue = {
  logged: true,
  user: {
    name: 'Paul R.A.',
    id: 'ABC123',
  },
  logOut: jest.fn(),
};

beforeEach(() => jest.clearAllMocks());

describe('Pruebas sobre Navbar', () => {
  test('Debe de mostrar el nombre del usuario ', () => {
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/search']}>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>,
    );
    // screen.debug();
    expect(screen.getByLabelText('span').innerHTML).toBe('Paul R.A.');
  });

  test('Debe de llamar el logout y navigate cuando se hace click en el boton ', () => {
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/search']}>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>,
    );

    const btnLogout = screen.getByRole('button');
    fireEvent.click(btnLogout);
    // screen.debug();
    expect(contextValue.logOut).toHaveBeenCalled();
    // expect(screen.getAllByText('Login').length).toBe(2);
    expect(mockedUseNavigate).toHaveBeenCalledWith('/login', { replace: true });
  });
});
