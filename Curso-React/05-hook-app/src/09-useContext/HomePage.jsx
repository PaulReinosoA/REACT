import { useContext } from 'react';
import { UserContext } from './context/UserContext';

export const HomePage = () => {
  const title = 'HomePage';
  const { user, setuser } = useContext(UserContext);
  return (
    <>
      <h1>
        {title}: {user?.name}
      </h1>
      <hr />
      <pre>{JSON.stringify(user, null, 3)}</pre>
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
