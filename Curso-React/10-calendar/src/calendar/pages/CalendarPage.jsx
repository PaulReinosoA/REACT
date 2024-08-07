import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
// import { addHours } from 'date-fns';
import { getMessagesES, localizer } from '../helpers';
import {
  CalendarEvent,
  CalendarModal,
  FabAddNew,
  FabDelete,
  Navbar,
} from '../pages';
import { useEffect, useState } from 'react';
import { useAuthStore, useUiStore } from '../../store/hooks';
import { useCalendarStore } from '../../store/hooks/useCalendarStore';

export const CalendarPage = () => {
  const { user } = useAuthStore();
  const { openDateModal } = useUiStore();
  const { events, setActiveEvent, startLoadingEvent } = useCalendarStore();
  const [lastView, setlastView] = useState(
    localStorage.getItem('lastView') || 'week'
  );

  const eventStyleGetter = (event) => {
    const isMyEvent =
      user.uid === event.user._id || user.uid === event.user.uid;
    const style = {
      backgroundColor: isMyEvent ? '#347CF7' : '#465660',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white',
    };
    return { style };
  };

  const onDoubleClic = (/* event */) => {
    // console.log({ doubleClic: event });
    openDateModal();
  };
  const onSelected = (event) => {
    // console.log({ clic: event });
    setActiveEvent(event);
  };
  const onViewChange = (event) => {
    console.log({ viewChange: event });
    localStorage.setItem('lastView', event);
    setlastView(event);
  };

  useEffect(() => {
    startLoadingEvent();
  }, []);

  return (
    <>
      <Navbar />
      <Calendar
        culture="es"
        localizer={localizer}
        events={events}
        defaultView={lastView} // podemos poner la pestaña dl calendario ej:agenda
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100vh - 80px)' }}
        messages={getMessagesES()}
        eventPropGetter={eventStyleGetter}
        components={{ event: CalendarEvent }}
        onDoubleClickEvent={onDoubleClic}
        onSelectEvent={onSelected}
        onView={onViewChange}
      />
      <CalendarModal />
      <FabAddNew />
      <FabDelete />
    </>
  );
};
