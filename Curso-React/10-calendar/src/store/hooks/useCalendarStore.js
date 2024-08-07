import { useDispatch, useSelector } from 'react-redux';
import {
  onAddNewEvnt,
  onDeleteEvnt,
  onLoadEvent,
  onSetctiveEvent,
  onUpdateEvnt,
} from '../calendar/calendarSlice';
import { calendarApi } from '../../api';
import { convertEventsToDateEvents } from '../../calendar/helpers';
import Swal from 'sweetalert2';

export const useCalendarStore = () => {
  const { events, activeEvent } = useSelector((state) => state.calendar);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetctiveEvent(calendarEvent));
  };

  const startSavingEvent = async (calendarEvent) => {
    try {
      // todo: llegar al backend
      if (calendarEvent.id) {
        // actualizar
        await calendarApi.put(`/events/${calendarEvent.id}`, calendarEvent);
        dispatch(onUpdateEvnt({ ...calendarEvent, user }));
        return;
      }
      // crear evento en BD
      const { data } = await calendarApi.post('/events/', calendarEvent);
      // crear evento en store
      dispatch(
        onAddNewEvnt({ ...calendarEvent, id: data.evento.id, user: user })
      );
      // console.log({ data });
    } catch (error) {
      console.log(error);
      Swal.fire('Error al guardar', error.response.data?.msg, 'error');
    }
  };

  const starteDeleteEvent = async () => {
    //todo: llegar al bckend
    try {
      await calendarApi.delete(`/events/${activeEvent.id}`);
      dispatch(onDeleteEvnt());
    } catch (error) {
      console.log(error);
      Swal.fire('Error al borrar', error.response.data?.msg, 'error');
    }
  };

  const startLoadingEvent = async () => {
    try {
      //todo: llegar a bckend
      const { data } = await calendarApi.get('/events');
      // console.log(data);
      const eventos = convertEventsToDateEvents(data.eventos);
      dispatch(onLoadEvent(eventos));
      console.log({ eventos });
      // dispatch(onDeleteEvnt());
    } catch (error) {
      console.log(error);
    }
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
    startLoadingEvent,
  };
};
