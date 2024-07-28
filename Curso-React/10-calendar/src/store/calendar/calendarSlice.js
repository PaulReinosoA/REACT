import { createSlice } from '@reduxjs/toolkit';
import { addHours } from 'date-fns';

const tempEvent = {
  _id: new Date().getTime(),
  title: 'cumpleaños del jefe',
  notes: 'hay que comprar el pastel',
  start: new Date(),
  end: addHours(new Date(), 2),
  bgColor: '#fafafa',
  user: {
    _id: '213',
    name: 'Paul',
  },
};

export const calendarSlice = createSlice({
  name: 'name',
  initialState: {
    events: [tempEvent],
    activeEvent: null,
  },
  reducers: {
    onSetctiveEvent: (state, { payload }) => {
      state.activeEvent = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { onSetctiveEvent } = calendarSlice.actions;
