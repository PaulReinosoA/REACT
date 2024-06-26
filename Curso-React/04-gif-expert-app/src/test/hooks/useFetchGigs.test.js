import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGigs } from '../../hooks/useFetchGigs';

describe('Pruebas en el hook useFetchGigs', () => {
  test('Debe regresar el estado inicial ', () => {
    const { result } = renderHook(() => useFetchGigs('One Punch'));
    const { images, isLoading } = result.current;
    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test('Debe retornar arreglo de imagenes e isLoading en false ', async () => {
    const { result } = renderHook(() => useFetchGigs('One Punch'));
    // Espera hasta que la llamda ocurra para no tomar solo el estdo inicial,
    await waitFor(() =>
      expect(result.current.images.length).toBeGreaterThan(0),
    );
    const { images, isLoading } = result.current;
    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
