import { useDispatch, useSelector } from 'react-redux';
import {
  onAddNewEvnt,
  onDeleteEvnt,
  onSetctiveEvent,
  onUpdateEvnt,
} from '../calendar/calendarSlice';

export const useCalendarStore = () => {
  const { events, activeEvent } = useSelector((state) => state.calendar);
  const dispatch = useDispatch();
  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetctiveEvent(calendarEvent));
  };

  const startSavingEvent = async (calendarEvent) => {
    // todo: llegar al backend

    // todo: todo bien
    if (calendarEvent._id) {
      // actualizar
      dispatch(onUpdateEvnt({ ...calendarEvent }));
    } else {
      // crear
      dispatch(onAddNewEvnt({ ...calendarEvent, _id: new Date().getTime() }));
    }
  };

  const starteDeleteEvent = () => {
    // llegar abckend
    dispatch(onDeleteEvnt());
  };

  return {
    //* propertis:
    events,
    activeEvent,
    hasEventSelected: !!activeEvent, // se si hay evento seleccionado
    //* methods;
    setActiveEvent,
    startSavingEvent,
    starteDeleteEvent,
  };
};
