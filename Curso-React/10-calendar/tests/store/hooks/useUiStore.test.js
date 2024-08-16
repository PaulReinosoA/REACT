import { renderHook } from '@testing-library/react';
import { useUiStore } from '../../../src/store/hooks/useUiStore';
import { Provider } from 'react-redux';
import { store, uiSlice } from '../../../src/store';
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

describe('pruebas sobre useUiStore.js', () => {
  test('debe de regresar los valores por defecto', () => {
    const mockStore = getMockStore({});
    const { result } = renderHook(() => useUiStore(), {
      wrapper: ({ children }) => (
        <Provider store={mockStore}>{children}</Provider>
      ),
    });
    console.log(result);
  });
});
