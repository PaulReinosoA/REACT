import { useContext } from 'react';
import { AuthContext } from '../auth';
import { Navigate } from 'react-router';

export const PublicRoute = ({ children }) => {
  // significa que recibire otro componenet hight order componen
  const { logged } = useContext(AuthContext);
  // si no autenthicado muestro los hijos
  return !logged ? children : <Navigate to="/marvel" />;
}