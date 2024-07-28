import { useDispatch, useSelector } from 'react-redux';
import { onSetctiveEvent } from '../calendar/calendarSlice';

export const useCalendarStore = () => {
  const { events, activeEvent } = useSelector((state) => state.calendar);
  const dispatch = useDispatch();
  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetctiveEvent(calendarEvent));
  };

  return {
    //* propertis:
    events,
    activeEvent,
    //* methods;
    setActiveEvent,
  };
};
