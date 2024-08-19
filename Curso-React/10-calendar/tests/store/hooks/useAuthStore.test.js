import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from '../../../src/store';
import { Provider } from 'react-redux';
import { act, renderHook, waitFor } from '@testing-library/react';
import { useAuthStore } from '../../../src/store/hooks/useAuthStore';
import { initialState, notAuthenticatedState } from '../../fixtures/authStates';
import { testUserCredentials } from '../../fixtures/testUser';
import { calendarApi } from '../../../src/api';

const getMockStore = (initialState) => {
  return configureStore({
    reducer: {
      auth: authSlice.reducer,
    },
    preloadedState: {
      auth: { ...initialState },
    },
  });
};

describe('pruebas sobre useAuthStore.js', () => {
  beforeEach(() => localStorage.clear());

  test('debe de regresar los valores por defecto', () => {
    const mockStore = getMockStore(initialState);

    const { result } = renderHook(() => useAuthStore(), {
      wrapper: ({ children }) => (
        <Provider store={mockStore}>{children}</Provider>
      ),
    });

    // console.log(result);

    expect(result.current).toEqual({
      status: 'checking',
      user: {},
      errorMessage: undefined,
      startLogin: expect.any(Function),
      startRegister: expect.any(Function),
      checkAuthToken: expect.any(Function),
      startLogOut: expect.any(Function),
    });
  });

  test('startLogIn debe de realizar el logIn', async () => {
    // localStorage.clear();
    const mockStore = getMockStore(notAuthenticatedState);

    const { result } = renderHook(() => useAuthStore(), {
      wrapper: ({ children }) => (
        <Provider store={mockStore}>{children}</Provider>
      ),
    });

    await act(
      async () =>
        await result.current.startLogin({
          email: testUserCredentials.email,
          password: testUserCredentials.password,
        })
    );

    // console.log(result.current);
    expect(result.current.status).toBe('Authenticated');
    expect(result.current.errorMessage).toBe(undefined);
    expect(result.current.user).toEqual({
      name: 'Test User',
      uid: '66b81fa69c5694d572b6daa1',
    });

    expect(localStorage.getItem('token')).toEqual(expect.any(String));
    expect(localStorage.getItem('token-init-date')).toEqual(expect.any(String));
  });

  test('startLogIn debe de fallar la autenticacion', async () => {
    // localStorage.clear();
    const mockStore = getMockStore(notAuthenticatedState);

    const { result } = renderHook(() => useAuthStore(), {
      wrapper: ({ children }) => (
        <Provider store={mockStore}>{children}</Provider>
      ),
    });

    await act(
      async () =>
        await result.current.startLogin({
          email: 'algo@google.com',
          password: '789456',
        })
    );

    // console.log(result.current);
    expect(result.current.status).toBe('not-Authenticated');
    expect(result.current.errorMessage).toBe('error al inciar secion');
    expect(result.current.user).toEqual({});

    expect(localStorage.getItem('token')).toEqual(null);
    expect(localStorage.getItem('token-init-date')).toEqual(null);

    await waitFor(() => {
      expect(result.current.errorMessage).toBe(undefined);
    });
  });

  test('startRegister debe de crear un nuevo usuario', async () => {
    // localStorage.clear();
    const mockStore = getMockStore({ ...notAuthenticatedState });

    const { result } = renderHook(() => useAuthStore(), {
      wrapper: ({ children }) => (
        <Provider store={mockStore}>{children}</Provider>
      ),
    });

    const spy = jest.spyOn(calendarApi, 'post').mockReturnValue({
      data: {
        ok: true,
        uid: 'test ID:123456',
        name: 'Test User',
        token: 'algun token:ASDFG123456',
        msg: 'singin conrrecto!!! :)',
      },
    });

    await act(
      async () =>
        await result.current.startRegister({
          email: 'algo3@google.com',
          password: '789456',
          name: 'Test user 2',
        })
    );

    const { user, errorMessage, status } = result.current;

    // console.log(result.current);
    expect({ user, errorMessage, status }).toEqual({
      status: 'Authenticated',
      user: { name: 'Test User', uid: 'test ID:123456' },
      errorMessage: undefined,
    });

    spy.mockRestore(); // limpia el espia
  });

  test('startRegister debe de fallar la creacion', async () => {
    // localStorage.clear();
    const mockStore = getMockStore({ ...notAuthenticatedState });

    const { result } = renderHook(() => useAuthStore(), {
      wrapper: ({ children }) => (
        <Provider store={mockStore}>{children}</Provider>
      ),
    });

    await act(
      async () => await result.current.startRegister(testUserCredentials)
    );

    const { user, errorMessage, status } = result.current;

    // console.log(result.current);
    expect({ user, errorMessage, status }).toEqual({
      errorMessage: 'un usuario existe con ese correo',
      status: 'not-Authenticated',
      user: {},
    });
  });

  test('checkAuthToken debe de cambiar si hay token', async () => {
    // localStorage.clear();

    const { data } = await calendarApi.post('/auth', testUserCredentials);
    localStorage.setItem('token', data.token);

    const mockStore = getMockStore({ ...initialState });

    const { result } = renderHook(() => useAuthStore(), {
      wrapper: ({ children }) => (
        <Provider store={mockStore}>{children}</Provider>
      ),
    });

    await act(async () => await result.current.checkAuthToken());

    console.log(result.current);
    const { user, errorMessage, status } = result.current;

    // console.log(result.current);
    expect({ user, errorMessage, status }).toEqual({
      errorMessage: undefined,
      status: 'Authenticated',
      user: {
        name: 'Test User',
        uid: '66b81fa69c5694d572b6daa1',
      },
    });
  });
});
