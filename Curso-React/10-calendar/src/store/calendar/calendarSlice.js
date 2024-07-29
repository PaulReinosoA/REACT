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
    onAddNewEvnt: (state, { payload }) => {
      state.events.push(payload);
      state.activeEvent = null;
    },
    onUpdateEvnt: (state, { payload }) => {
      state.events = state.events.map((event) => {
        if (event._id === payload._id) {
          return payload;
        }
        return event;
      });
    },
    onDeleteEvnt: (state) => {
      if (state.activeEvent) {
        state.events = state.events.filter((event) => {
          event._id !== state.activeEvent._id;
        });
        state.activeEvent = null;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { onSetctiveEvent, onAddNewEvnt, onUpdateEvnt, onDeleteEvnt } =
  calendarSlice.actions;
