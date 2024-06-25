// import { useReducer } from 'react';
import { authReducer } from '../../../auth/context/authReducer';

// const init = () => {
//   const user = {
//     id: 'ABC',
//     name: 'Paul Reinoso A.',
//   };
//   return {
//     logged: !!user,
//     user,
//   };
// };

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

  test('Debe de llamar el login autenticar yestablecer el user', () => {});

  test('Debe de borrar el name del usuario y logout en false', () => {});
});
