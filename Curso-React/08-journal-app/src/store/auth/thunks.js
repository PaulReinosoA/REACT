/* eslint-disable consistent-return */
import { singInWithGoogl } from '../../firebase/providers';
import { chekingCredentials, login, logout } from './authSlice';

// THUNKS --> FUNCIONES QUE DESPACHAN un accion ASINCRONA,
// acciones con taeras asincronas  si son sincronas con reducers,
export const checkingAuthentication = (email, password) => async (dispatch) => {
  console.log(email, password);
  dispatch(chekingCredentials());
};

export const startGoogleSingIn = () => async (dispatch) => {
  dispatch(chekingCredentials());
  const result = await singInWithGoogl();
  if (!result.ok) return dispatch(logout(result.errorMessage));
  // delete result.ok; // elimina esa propiedad, pero da error en el codigo
  dispatch(login(result));
};
