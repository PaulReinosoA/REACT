import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'checking', // Authenticated, not-Authenticated
    user: {},
    errorMessage: undefined,
  },
  reducers: {
    onChecking: (state /* action */) => {
      state.status = 'checking';
      state.user = {};
      state.errorMessage = undefined;
    },
    onLogin: (state, payload) => {
      state.status = 'Authenticated';
      state.user = payload;
      state.errorMessage = undefined;
    },
  },
});

// Action creators are generated for each case reducer function
export const { onChecking, onLogin } = authSlice.actions;
