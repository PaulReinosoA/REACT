import {
  calendarSlice,
  onAddNewEvnt,
  onDeleteEvnt,
  onLoadEvent,
  onLogOutCalendar,
  onUpdateEvnt,
} from '../../../src/store/calendar/calendarSlice';
import {
  calendarWithActiveEventState,
  calendarWithEventState,
  events,
  initialState,
} from '../../fixtures/calendarStates';

describe('Pruebas en calendarSlice', () => {
  test('debe de regresar el estado por defecto', () => {
    const state = calendarSlice.getInitialState();
    expect(state).toEqual(initialState);
  });

  test('onAddNewEvent debe de agregar un evento', () => {
    const newEvent = {
      id: '3',
      start: new Date('2022-10-27 13:00:00'),
      end: new Date('2022-10-27 15:00:00'),
      title: 'cumpleaños de Paul',
      notes: 'alguna nota!!!',
    };

    const state = calendarSlice.reducer(
      calendarWithEventState,
      onAddNewEvnt(newEvent)
    );

    // console.log(state);
    expect(state.events).toEqual([...events, newEvent]);
  });

  test('onUpdateEvent debe actualizar un evento', () => {
    const updatedEvent = {
      id: '1',
      start: new Date('2023-10-27 13:00:00'),
      end: new Date('2023-10-27 15:00:00'),
      title: 'cumpleaños de Paul >.< act',
      notes: 'alguna nota act!!',
    };

    const state = calendarSlice.reducer(
      calendarWithEventState,
      onUpdateEvnt(updatedEvent)
    );

    // console.log(state);
    expect(state.events).toContain(updatedEvent);
  });

  test('OnDeleteEvent debe borrar el evento activo', () => {
    const state = calendarSlice.reducer(
      calendarWithActiveEventState,
      onDeleteEvnt()
    );
    // console.log(state);
    expect(state.activeEvent).toBe(null);
    expect(state.events.length).not.toContain(events[0]);
  });

  test('OnLoadEvent debe establecer los eventos', () => {
    const state = calendarSlice.reducer(initialState, onLoadEvent(events));
    expect(state.isLoadingEvents).toBeFalsy();
    expect(state.events).toEqual(events);
  });

  test('OnLogOutCalendar debe de limpiar el estado', () => {
    const state = calendarSlice.reducer(
      calendarWithActiveEventState,
      onLogOutCalendar()
    );

    expect(state).toEqual(initialState);
  });
});
