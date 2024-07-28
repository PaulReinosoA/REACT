import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
// import { addHours } from 'date-fns';
import { getMessagesES, localizer } from '../helpers';
import { CalendarEvent, CalendarModal, Navbar } from '../pages';
import { useState } from 'react';
import { useUiStore } from '../../store/hooks';
import { useCalendarStore } from '../../store/hooks/useCalendarStore';

export const CalendarPage = () => {
  const { openDateModal } = useUiStore();
  const { events, setActiveEvent } = useCalendarStore();
  const [lastView, setlastView] = useState(
    localStorage.getItem('lastView') || 'week'
  );

  const eventStyleGetter = (/* event, start, end, isSelected */) => {
    const style = {
      backgroundColor: '#347CF7',
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
    setActiveEvent(event)
  };
  const onViewChange = (event) => {
    console.log({ viewChange: event });
    localStorage.setItem('lastView', event);
    setlastView(event);
  };

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
    </>
  );
};
