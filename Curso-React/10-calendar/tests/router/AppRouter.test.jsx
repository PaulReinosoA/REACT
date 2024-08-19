import { render, screen } from '@testing-library/react';
import { useAuthStore } from '../../src/store/hooks';
import { AppRouter } from '../../src/router/AppRouter';
import { MemoryRouter } from 'react-router';

jest.mock('../../src/store/hooks/useAuthStore');

jest.mock('../../src/calendar/pages', () => {
  CalendarPage: () => <h1>CalendarPage</h1>;
});

describe('Pruebas sobre AppRouter', () => {
  const mockCheckAuthToken = jest.fn();
  beforeEach(() => jest.clearAllMocks());

  test('debe de mostrar la pantalla de carga y llmaar chechAuthenticated', () => {
    // jest.fn().mockReturnValue
    useAuthStore.mockReturnValue({
      status: 'checking',
      checkAuthToken: mockCheckAuthToken,
    });

    render(<AppRouter />);

    screen.debug();
    expect(screen.getByLabelText('h3').innerHTML).toBe('Cargando...');
    expect(mockCheckAuthToken).toHaveBeenCalled();
  });

  test('debe de mostrar el login de no estar autenticado', () => {
    useAuthStore.mockReturnValue({
      status: 'not-Authenticated',
      checkAuthToken: mockCheckAuthToken,
    });

    const { container } = render(
      <MemoryRouter>
        <AppRouter />
      </MemoryRouter>
    );

    screen.debug();

    expect(screen.getByText('Ingreso')).toBeTruthy();
    expect(mockCheckAuthToken).toHaveBeenCalled();
    expect(container).toMatchSnapshot();
  });

  test('debe de mostrar el calendario si estamos autenticados', () => {
    useAuthStore.mockReturnValue({
      status: 'Authenticated',
      checkAuthToken: mockCheckAuthToken,
    });

    render(
      <MemoryRouter>
        <AppRouter />
      </MemoryRouter>
    );

    screen.debug();

    expect(screen.getByText('CalendarPage')).toBeTruthy();
  });
});
