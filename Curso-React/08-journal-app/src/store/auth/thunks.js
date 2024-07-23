/* eslint-disable consistent-return */
import { chekingCredentials, login, logout } from './authSlice';
import {
  loginWithEmailPassword,
  logoutFirebase,
  registerWithEmailPassword,
  singInWithGoogl,
} from '../../firebase/providers';
import { clearNotesLogout } from '../journal/journalSlice';

// THUNKS --> FUNCIONES QUE DESPACHAN un accion ASINCRONA,
// acciones con taeras asincronas  si son sincronas con reducers,
export const checkingAuthentication = () => async (dispatch) => {
  // console.log(email, password);
  dispatch(chekingCredentials());
};

export const startGoogleSingIn = () => async (dispatch) => {
  dispatch(chekingCredentials());
  const result = await singInWithGoogl();
  if (!result.ok) return dispatch(logout(result.errorMessage));
  // delete result.ok; // elimina esa propiedad, pero da error en el codigo
  dispatch(login(result));
};

export const startRegisterWithEmailPassword =
  (email, password, displayName) => async (dispatch) => {
    dispatch(chekingCredentials());
    const { ok, uid, photoURL, errorMessage } = await registerWithEmailPassword(
      email,
      password,
      displayName,
    );
    if (!ok) return dispatch(logout({ errorMessage }));

    dispatch(login({ uid, displayName, email, photoURL }));
  };

export const startLoginWithEmailPassword =
  (email, password) => async (dispatch) => {
    dispatch(chekingCredentials());
    const { ok, uid, photoURL, displayName, errorMessage } =
      await loginWithEmailPassword({
        email,
        password,
      });
    // console.log(ok, uid, photoURL, errorMessage, email);
    if (!ok) return dispatch(logout({ errorMessage }));

    dispatch(login({ uid, email, photoURL, displayName }));
  };

export const startLogout = () => async (dispatch) => {
  await logoutFirebase();
  dispatch(clearNotesLogout());
  dispatch(logout({}));
};
