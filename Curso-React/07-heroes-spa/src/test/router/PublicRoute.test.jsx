import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router';
import { PublicRoute } from '../../router/PublicRoute';
import { AuthContext } from '../../auth';

describe('Pruebas sobre PublicRoute', () => {
  test('debe mostrar el children si no esta authenticado', () => {
    const contextValue = {
      logged: false,
    };
    render(
      <AuthContext.Provider value={contextValue}>
        <PublicRoute>
          {/* Este es el children */}
          <h1>Prueba Ruta Publica</h1>
        </PublicRoute>
      </AuthContext.Provider>,
    );

    // screen.debug();
    expect(screen.getByText('Prueba Ruta Publica')).toBeTruthy();
  });

  test('debe mostrar el navigate(marvel) si esta authenticado', () => {
    const contextValue = {
      logged: true,
      user: {
        name: 'Strider',
        id: 'ABC123',
      },
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/login']}>
          <Routes>
            <Route
              path="login"
              element={
                <PublicRoute>
                  <h1>Prueba Ruta Publica</h1>
                </PublicRoute>
              }
            />
            <Route path="marvel" element={<h1>Pagina Marvel</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>,
    );

    // screen.debug();
    expect(screen.getByText('Pagina Marvel')).toBeTruthy();
  });
});
