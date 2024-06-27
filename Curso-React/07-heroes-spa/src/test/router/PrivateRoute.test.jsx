import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { AuthContext } from '../../auth';
import { PrivateRoute } from '../../router/PrivateRoute';

describe('Pruebas sobre PrivateRoute', () => {
  test('Debe de mostrar el chisldren si esta autenticado', () => {
    Storage.prototype.setItem = jest.fn();

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
          <PrivateRoute>
            {/* Este es el children */}
            <h1>Prueba Ruta Publica</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>,
    );

    // screen.debug();
    // expect(screen.getByText('Prueba Ruta Publica')).toBeTruthy();
    expect(localStorage.setItem).toHaveBeenCalledWith('previewPath', 'marvel');
  });
});
