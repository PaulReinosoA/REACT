import { act, renderHook } from '@testing-library/react';
import { useUiStore } from '../../../src/store/hooks/useUiStore';
import { Provider } from 'react-redux';
import { uiSlice } from '../../../src/store';
import { configureStore } from '@reduxjs/toolkit';

const getMockStore = (initialState) => {
  return configureStore({
    reducer: {
      ui: uiSlice.reducer,
    },
    preloadedState: {
      ui: { ...initialState },
    },
  });
};

describe('PRUEBAS sobre useUiStore.js', () => {
  test('debe de regresar los valores por defecto', () => {
    const mockStore = getMockStore({ isDateModalOpen: false });

    const { result } = renderHook(() => useUiStore(), {
      wrapper: ({ children }) => (
        <Provider store={mockStore}>{children}</Provider>
      ),
    });
    // console.log('current', result.current);

    expect(result.current).toEqual({
      clouseDateModal: expect.any(Function),
      isDateModalOpen: false,
      openDateModal: expect.any(Function),
      toggelDateModal: expect.any(Function),
    });
  });

  test('openDateModal Debe dar true en el isDateModalOpen ', () => {
    const mockStore = getMockStore({ isDateModalOpen: false });
    const { result } = renderHook(() => useUiStore(), {
      wrapper: ({ children }) => (
        <Provider store={mockStore}>{children}</Provider>
      ),
    });

    const { isDateModalOpen, openDateModal } = result.current;

    act(() => openDateModal());

    // desestructuracion no cambia los valores promitivos!!!
    // console.log({ result: result.current, isDateModalOpen });

    expect(result.current.isDateModalOpen).toBeTruthy();
  });

  test('closeDateModal Debe dar false en el isDateModalOpen', () => {
    const mockStore = getMockStore({ isDateModalOpen: true });
    const { result } = renderHook(() => useUiStore(), {
      wrapper: ({ children }) => (
        <Provider store={mockStore}>{children}</Provider>
      ),
    });

    const { isDateModalOpen, clouseDateModal } = result.current;
    act(() => clouseDateModal());

    // desestructuracion no cambia los valores promitivos!!!
    // console.log({ result: result.current, isDateModalOpen });

    expect(result.current.isDateModalOpen).toBeFalsy();
  });

  test('toggelDateModal Debe cambiar de valor a isDateModalOpen', () => {
    const mockStore = getMockStore({ isDateModalOpen: true });
    const { result } = renderHook(() => useUiStore(), {
      wrapper: ({ children }) => (
        <Provider store={mockStore}>{children}</Provider>
      ),
    });

    // const { isDateModalOpen, toggelDateModal } = result.current;
    act(() => result.current.toggelDateModal());

    expect(result.current.isDateModalOpen).toBeFalsy();
  });
});
