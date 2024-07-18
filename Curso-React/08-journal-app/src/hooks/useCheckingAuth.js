import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FirebaseAuth } from '../firebase/config';
import { login, logout } from '../store/auth';

export const useCheckingAuth = () => {
  const { status } = useSelector((state) => state.auth);
  const dispatch = useDispatch((state) => state.auth);

  useEffect(() => {
    // observable, funcion que emite valores
    // cunado el estado de la autenticacion cambia esto emite valores
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return dispatch(logout());
      const { uid, email, photoURL, displayName } = user;
      dispatch(login({ uid, email, photoURL, displayName }));
      return 0;
    });
  }, []);

  return { status };
};
