import { act, renderHook } from '@testing-library/react';
import { useForm } from '../../../01-useState/Hooks/useForm';

describe('Pruebas en useForm', () => {
  const initState = {
    username: 'paul',
    email: 'paulreinoso@gmail.com',
    password: '123456',
  };

  test('Debe regresar los valres por defecto ', () => {
    const { result } = renderHook(() => useForm(initState));
    // const { formState } = result.current;
    // console.log(formState);
    expect(result.current).toEqual({
      email: initState.email,
      password: initState.password,
      username: initState.username,
      formState: initState,
      OnInputChange: expect.any(Function),
      OnResetForm: expect.any(Function),
    });
  });

  test('debe de cambiar el nombre del fromulario ', () => {
    const newValue = 'Pedro N';
    const { result } = renderHook(() => useForm(initState));
    const { OnInputChange } = result.current;

    act(() => OnInputChange({ target: { name: 'name', value: newValue } }));
    expect(result.current.name).toBe(newValue);
    expect(result.current.formState.name).toBe(newValue);
  });

  test('debe de resetear el fromulario ', () => {
    const newValue = 'Pedro N';
    const { result } = renderHook(() => useForm(initState));
    const { OnInputChange, OnResetForm } = result.current;

    act(() => {
      OnInputChange({ target: { name: 'name', value: newValue } });
      OnResetForm();
    });

    expect(result.current.username).toBe(initState.username);
    expect(result.current.formState.username).toBe(initState.username);
  });
});
