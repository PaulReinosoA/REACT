import { useContext } from 'react';
import { UserContext } from './context/UserContext';

export const LoginPage = () => {
  const title = 'LoginPage';
  const { user } = useContext(UserContext);
  // console.log(user);

  return (
    <>
      <h1>{title}: MyApp</h1>
      <hr />
      <span>{JSON.stringify(user, null, 3)}</span>;
    </>
  );
};
