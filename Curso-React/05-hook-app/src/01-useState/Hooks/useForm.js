import { useState } from 'react';

export const useForm = (initialForm = {}) => {
  const [formState, setformState] = useState(initialForm);

  const OnInputChange = (event) => {
    const { name, value } = event.target;
    setformState({
      ...formState, // desestructuramos para matener campos y solo cambiamos name modificaco
      [name]: value,
    });
  };

  const OnResetForm = () => {
    // setformState({
    //   username: '',
    //   email: '',
    //   password: '',
    // });
    setformState(initialForm);
  };
  // expongo en el hook
  return {
    ...formState, // expongo todos lo campos
    formState,
    OnInputChange,
    OnResetForm,
  };
};
// paquete de 3ro para manejar formularios https://www.react-hook-form.com/get-started
