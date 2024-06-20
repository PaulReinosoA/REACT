import { useNavigate } from 'react-router';

export const LoginPage = () => {
  const navigate = useNavigate();
  const onLogin = () => {
    navigate('/search', { replace: true }); // replace evita que la persona vuelva al historial anterior en el navegador con la fecha hacia atras
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
