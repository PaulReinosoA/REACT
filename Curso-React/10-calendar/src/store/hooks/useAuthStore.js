import { useDispatch, useSelector } from 'react-redux';
import { calendarApi } from '../../api';
import {
  clearErrorMessage,
  onChecking,
  onLogOut,
  onLogin,
} from '../auth/authSlice';

export const useAuthStore = () => {
  const dispatch = useDispatch();
  const { status, user, errorMessage } = useSelector((state) => state.auth);

  // const onChecking = () => {};

  const startLogin = async ({ email, password }) => {
    dispatch(onChecking());
    try {
      const { data } = await calendarApi.post('/auth', { email, password });
      localStorage.setItem('token', data.token);
      localStorage.setItem('token-init-date', new Date());
      dispatch(onLogin({ name: data.name, uid: data.uid }));
    } catch (error) {
      console.log({error})
      dispatch(onLogOut('error al inciar secion'));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 10);
    }
  };

  const startRegister = async ({ name, email, password }) => {
    dispatch(onChecking());
    try {
      const { data } = await calendarApi.post('/auth/new', {
        name,
        email,
        password,
      });
      localStorage.setItem('token', data.token);
      localStorage.setItem('token-init-date', new Date());
      dispatch(onLogin({ name: data.name, uid: data.uid }));
    } catch (error) {
      console.log({error})
      dispatch(onLogOut(error.response.data?.msg || ''));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 10);
    }
  };

  return {
    //* properties
    status,
    user,
    errorMessage,
    //* methods
    startLogin,
    startRegister,
  };
};
