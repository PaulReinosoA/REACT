import { createSlice } from '@reduxjs/toolkit';
// import { addHours } from 'date-fns';

// const tempEvent = {
//   _id: new Date().getTime(),
//   title: 'cumpleaños del jefe',
//   notes: 'hay que comprar el pastel',
//   start: new Date(),
//   end: addHours(new Date(), 2),
//   bgColor: '#fafafa',
//   user: {
//     _id: '213',
//     name: 'Paul',
//   },
// };

export const calendarSlice = createSlice({
  name: 'name',
  initialState: {
    isLoadingEvents: true,
    events: [
      //  tempEvent
    ],
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
        if (event.id === payload.id) {
          return payload;
        }
        return event;
      });
    },
    onDeleteEvnt: (state) => {
      if (state.activeEvent) {
        state.events = state.events.filter(
          (event) => event.id !== state.activeEvent.id
        );
        state.activeEvent = null;
      }
    },
    onLoadEvent: (state, { payload = [] }) => {
      state.isLoadingEvents = false;
      // state.events = payload;
      payload.forEach((event) => {
        const existe = state.events.some((dbEvent) => dbEvent.id === event.id);
        if (!existe) {
          state.events.push(event);
        }
      });
    },
    onLogOutCalendar: (state) => {
      state.isLoadingEvents = true;
      state.events = [];
      state.activeEvent = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  onSetctiveEvent,
  onAddNewEvnt,
  onUpdateEvnt,
  onDeleteEvnt,
  onLoadEvent,
  onLogOutCalendar,
} = calendarSlice.actions;
