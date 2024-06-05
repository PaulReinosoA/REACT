import React, { useEffect, useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {
  const [formState, setformState] = useState({
    username: 'strider',
    email: 'paulreinoso@gmail.com',
  });

  const { username, email } = formState;
  const OnInputChange = (event) => {
    const { name, value } = event.target;
    setformState({
      ...formState, // desestructuramos para matener campos y solo cambiamos name modificaco
      [name]: value,
    });
  };

  // sirve para disparar efectos secundarios es una funcion
  // se llama cada vez que se redibuja
  useEffect(() => {
    // primer argumento es el callback
    // console.log('formState cambio');
  }, [formState]); // dependencia -->condiciones para disparar useEfect []->dispara una ves en el render

  useEffect(() => {
    // primer argumento es el callback
    // console.log('email cambio');
  }, [email]);

  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="UserName"
        name="username"
        value={username}
        onChange={OnInputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="paul@email.com"
        name="email"
        value={email}
        onChange={OnInputChange}
      />
      {/* revisa si el usuario existe */}
      {username === 'strider' && <Message />}
    </>
  );
};
