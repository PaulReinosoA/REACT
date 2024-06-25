import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';
import { types } from '../types/types';

// const initialState = {
//   logged: false,
// };
// leo del localstorage
const init = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return {
    logged: !!user,
    user,
  };
};
// este componente expone la informacion a todo el app usando el context;
export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {}, init);

  const login = (name = '') => {
    const user = {
      id: 'ABC',
      name,
    };

    const action = {
      type: types.login,
      payload: user,
    };
    localStorage.setItem('user', JSON.stringify(user));
    dispatch(action);
  };

  const logOut = () => {
    localStorage.removeItem('user');
    const action = { type: types.logout };
    dispatch(action);
  };

  return (
    <AuthContext.Provider value={{ ...authState, login, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.objectOf.isRequired,
};
