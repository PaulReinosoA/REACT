import { useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
  const [counter, setcounter] = useState(10);

  // sirve para memorizar funciones y regresa funcion a ejecutar esta solo se procesa si algo cambia
  const incrementeFather = useCallback((value) => {
    // funciopona por tomar el valor del state y suma uno, por eos el callback es necesario para modificar el valor pero no redibujar todo solo cambia el valor
    setcounter((c) => c + value);
  }, []);

  // const incrementeFather = () => {
  //   setcounter(counter + 1);
  // };

  return (
    <>
      <h1>callbackHook: {counter}</h1>
      <hr />
      <ShowIncrement incremente={incrementeFather} />
    </>
  );
};
