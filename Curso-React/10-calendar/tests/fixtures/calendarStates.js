export const events = [
  {
    id: '1',
    start: new Date('2022-10-27 13:00:00'),
    end: new Date('2022-10-27 15:00:00'),
    title: 'cumpleaños de Paul',
    notes: 'alguna anotacion de paul',
  },
  {
    id: '2',
    start: new Date('2022-12-27 13:00:00'),
    end: new Date('2022-12-27 15:00:00'),
    title: 'cumpleaños de Nicole',
    notes: 'alguna anotacion de Nicole',
  },
];

export const initialState = {
  isLoadingEvents: true,
  events: [],
  activeEvent: null,
};

export const calendarWithEventState = {
  isLoadingEvents: false,
  events: [...events],
  activeEvent: null,
};

export const calendarWithActiveEventState = {
  isLoadingEvents: false,
  events: [...events],
  activeEvent: { ...events[0] },
};
