//Archivo para crear snippets:
// C:\Users\Washington.Reinoso\AppData\Roaming\Code\User\snippets\javascript.json
// Marcado:
// alt + shift, y marcas con el mouse inicio y fin de lineas
import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'name',
  initialState: {
    counter: 10
  },
  reducers: {
    increment: (state, /* action */ ) => {
      state.counter += 1;
  },
  }
});

// Action creators are generated for each case reducer function
export const { increment } = todoSlice.actions;