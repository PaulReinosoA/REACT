import {
  authSlice,
  clearErrorMessage,
  onChecking,
  onLogin,
  onLogOut,
} from '../../../src/store/auth/authSlice';
import { AuthenticatedState, initialState } from '../../fixtures/authStates';
import { testUserCredentials } from '../../fixtures/testUser';

describe('pruebas sobre authSlice.js', () => {
  test('debe de regresar el estado inicial', () => {
    expect(authSlice.getInitialState()).toEqual(initialState);
  });

  test('debe de realizar un logIn ', () => {
    const state = authSlice.reducer(initialState, onLogin(testUserCredentials));
    // console.log(state);
    expect(state).toEqual({
      status: 'Authenticated',
      user: testUserCredentials,
      errorMessage: undefined,
    });
  });

  test('debe de realizar un logOut  ', () => {
    const errorMessage = 'sesion cerrada';
    const state = authSlice.reducer(AuthenticatedState, onLogOut(errorMessage));
    // console.log(state);
    expect(state).toEqual({
      status: 'not-Authenticated',
      user: {},
      errorMessage: errorMessage,
    });
  });

  test('debe de limpiar el mensaje de error', () => {
    const errorMessage = 'sesion cerrada';
    const state = authSlice.reducer(AuthenticatedState, onLogOut(errorMessage));
    const newState = authSlice.reducer(state, clearErrorMessage());
    expect(newState.errorMessage).toBe(undefined);
  });

  test('debe de realizar un checking', () => {
    const errorMessage = 'sesion cerrada';
    const state = authSlice.reducer(AuthenticatedState, onLogOut(errorMessage));
    const newState = authSlice.reducer(state, onChecking());

    // console.log(newState);

    expect(newState).toEqual({
      errorMessage: undefined,
      status: 'checking',
      user: {},
    });
  });
});
