import { chekingCredentials } from './authSlice';

// THUNKS --> FUNCIONES QUE DESPACHAN un accion ASINCRONA,
// acciones con taeras asincronas  si son sincronas con reducers,
export const checkingAuthentication = (email, password) => {
  return async (dispatch) => {
    dispatch(chekingCredentials());
  };
};

export const startGoogleSingIn = () => {
  return async (dispatch) => {
    dispatch(chekingCredentials());
  };
};
