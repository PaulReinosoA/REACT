// https://github.com/microsoft/cascadia-code/releases/tag/v1911.21
// 03 caskaydia nerd font --> En uso
// 01 Mononoki nerd font

import { authReducer } from '../../../auth/context/authReducer';
import { types } from '../../../auth/types/types';

describe('Pruebas sobre authReducer', () => {
  test('Debe de retornar el estado por defecto', () => {
    const initialState = {
      logged: false,
    };
    const acction = { type: '' };
    const state = authReducer(initialState, acction);
    // console.log(state);
    expect(state).toStrictEqual({ logged: false });
  });

  test('Debe de llamar el login autenticar yestablecer el user', () => {
    const initialState = {
      logged: false,
    };

    const action = {
      type: types.login,
      payload: { name: 'Paul Reinoso A.', id: '123' },
    };

    const state = authReducer(initialState, action);

    expect(state).toEqual({ logged: true, user: action.payload });
  });

  test('Debe de borrar el name del usuario y logout en false', () => {
    const initialState = {
      logged: false,
      user: { name: 'Paul Reinoso A.', id: '123' },
    };
    const action = {
      type: types.logout,
    };
    const state = authReducer(initialState, action);

    expect(state).toEqual({ logged: false });
  });
});
