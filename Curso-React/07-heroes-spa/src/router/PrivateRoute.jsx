import { useContext, useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router';
import { PropTypes } from 'prop-types';
import { AuthContext } from '../auth';

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

  // const previewPathState = localStorage.getItem('lastpath') || '/';
  // localStorage.setItem('previewPath', previewPathState);

  return logged ? children : <Navigate to="/login" />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
