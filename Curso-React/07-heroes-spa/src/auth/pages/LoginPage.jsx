import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../context';

export const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const onLogin = () => {
    const lastPath = localStorage.getItem('lastPath') || '/';

    login('Paul R.A.');
    navigate(lastPath, { replace: true }); // replace evita que la persona vuelva al historial anterior en el navegador con la fecha hacia atras
  };
  return (
    <>
      <div className="container">
        <h1>Login</h1>
        <hr />
        <button type="button" className="btn btn-primary" onClick={onLogin}>
          Login
        </button>
      </div>
    </>
  );
};
