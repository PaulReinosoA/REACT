import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { AppRouter } from '../../router/AppRouter';
import { AuthContext } from '../../auth';

describe('Pruebas sobre AppRouter', () => {
  test('Debe de mostrar el login si no esta autenticado', () => {
    const contextValue = {
      logged: false,
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/marvel']}>
          <AppRouter />
        </MemoryRouter>
      </AuthContext.Provider>,
    );

    expect(screen.getAllByText('Login').length).toBe(2);
  });

  test('Debe de mostrar el marvel si esta autenticado', () => {
    const contextValue = {
      logged: true,
      user: {
        name: 'Strider',
        id: 'ABC123',
      },
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/marvel']}>
          <AppRouter />
        </MemoryRouter>
      </AuthContext.Provider>,
    );

    expect(screen.getAllByText('Marvel Heroes:')).toBeTruthy();
  });
});
