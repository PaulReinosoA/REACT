import { useContext } from 'react';
import { UserContext } from './context/UserContext';

export const LoginPage = () => {
  const title = 'LoginPage';
  const { user, setuser } = useContext(UserContext);
  // console.log(user);

  return (
    <>
      <h1>{title}: MyApp</h1>
      <hr />
      <span aria-label="span">{JSON.stringify(user, null, 3)}</span>;
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          setuser({
            id: '123',
            name: 'Paul Reinoso',
            email: 'paulreinoso@gmail.com',
          });
        }}
      >
        Establecer usuario
      </button>
    </>
  );
};
