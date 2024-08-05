import { configureStore } from '@reduxjs/toolkit';
// import { uiSlice } from './ui/uiSlice';
// import { calendarSlice } from './calendar/calendarSlice';
// import { authSlice } from './auth/authSlice';

import { uiSlice, calendarSlice, authSlice } from './';

// aqui van todos los reducers:

export const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    calendar: calendarSlice.reducer,
    auth: authSlice.reducer,
  },
  // configuracion del middleware
  middleware: (getDefaultmiddleware) =>
    getDefaultmiddleware({
      serializableCheck: false,
    }),
});
