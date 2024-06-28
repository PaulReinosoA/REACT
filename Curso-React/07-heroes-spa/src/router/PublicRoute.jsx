import { useContext } from 'react';
import { Navigate } from 'react-router';
import { PropTypes } from 'prop-types';
import { AuthContext } from '../auth';

export const PublicRoute = ({ children }) => {
  // significa que recibire otro =>componenet hight order componen
  const { logged } = useContext(AuthContext);
  // si no autenticado muestro los hijos
  return !logged ? children : <Navigate to="/marvel" />;
};

PublicRoute.propTypes = {
  children: PropTypes.element.isRequired,
};
