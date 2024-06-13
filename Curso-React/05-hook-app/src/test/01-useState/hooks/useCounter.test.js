import { act, renderHook } from '@testing-library/react';
import { useCounter } from '../../../01-useState/Hooks/useCounter';

describe('Pruebas en useCounter', () => {
  test('debe de retornar los valores por defecto', () => {
    const { result } = renderHook(() => useCounter());
    const { counter, decremet, increment, reset } = result.current;
    expect(counter).toBe(10);
    expect(decremet).toEqual(expect.any(Function));
    expect(increment).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });

  test('debe de generar el counter con el valor de 100 ', () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter } = result.current;
    expect(counter).toBe(100);
  });

  test('debe de incrementar el contador ', () => {
    const { result } = renderHook(() => useCounter());
    const { increment } = result.current;
    act(() => increment()); // ejecuta el metodo
    expect(result.current.counter).toBeGreaterThan(10); // obtinee el valor actual CURRENT
  });

  test('debe de decrementar el contador ', () => {
    const { result } = renderHook(() => useCounter(10));
    const { decremet } = result.current;
    act(() => decremet());
    expect(result.current.counter).toBe(9);
  });

  test('debe de resetear al valor definido ', () => {
    const { result } = renderHook(() => useCounter(10));
    const { reset } = result.current;
    act(() => reset());
    expect(result.current.counter).toBe(10);
  });
});
