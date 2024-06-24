import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../auth';
import { Navigate, useLocation } from 'react-router';

export const PrivateRoute = ({ children }) => {
  // significa que recibire otro componenet hight order componen
  const { logged } = useContext(AuthContext);
  const { pathname, search } = useLocation();
  const lastpath = pathname + search;

  const [previewPathState, setPreviewPathState] = useState('/');

  useEffect(() => {    
    setPreviewPathState(localStorage.getItem('lastpath') || '/');
    localStorage.setItem('previewPath', previewPathState);
  }, [lastpath]);

  localStorage.setItem('lastpath', lastpath);
  return logged ? children : <Navigate to="/login" />;
};
