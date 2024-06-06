// import React, { useEffect, useState } from 'react';
import { useForm } from '../01-useState/Hooks/useForm';
// import { Message } from './Message';

export const FormWithCustomHook = () => {
  // const [formState, setformState] = useState({
  //   username: '',
  //   email: '',
  //   password: '',
  // });

  // const { username, email, password } = formState;
  // const OnInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setformState({
  //     ...formState, // desestructuramos para matener campos y solo cambiamos name modificaco
  //     [name]: value,
  //   });
  // };

  const { formState, OnInputChange, OnResetForm } = useForm({
    username: '',
    email: '',
    password: '',
  });

  const { username, email, password } = formState;

  // sirve para disparar efectos secundarios es una funcion
  // se llama cada vez que se redibuja
  // useEffect(() => {
  //   // primer argumento es el callback
  //   // console.log('formState cambio');
  // }, [formState]); // dependencia -->condiciones para disparar useEfect []->dispara una ves en el render

  // useEffect(() => {
  //   // primer argumento es el callback
  //   // console.log('email cambio');
  // }, [email]);

  return (
    <>
      <h1>Form With Custom Hook</h1>
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
      <input
        type="password"
        className="form-control mt-2"
        placeholder="contraseña"
        name="password"
        value={password}
        onChange={OnInputChange}
      />
      {/* revisa si el usuario existe */}
      {/* username === 'strider' && <Message /> */}
      <button
        onClick={OnResetForm}
        type="button"
        className="btn btn-primary mt-2"
      >
        BORRAR
      </button>
    </>
  );
};
