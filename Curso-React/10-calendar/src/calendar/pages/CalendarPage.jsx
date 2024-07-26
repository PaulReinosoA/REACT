import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { addHours } from 'date-fns';
import { getMessagesES, localizer } from '../helpers';
import { CalendarEvent, Navbar } from '../pages';

const myEventsList = [
  {
    title: 'cumpleaños del jefe',
    notes: 'hay que comprar el pastel',
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: '#fafafa',
    user: {
      _id: '213',
      name: 'Paul',
    },
  },
];

const eventStyleGetter = (event, start, end, isSelected) => {
  const style = {
    backgroundColor: '#347CF7',
    borderRadius: '0px',
    opacity: 0.8,
    color: 'white',
  };
  return { style };
};

const onDoubleClic = (event) => {
  console.log({ doubleClic: event });
};
const onSelected = (event) => {
  console.log({ clic: event });
};
const onViewChange = (event) => {
  console.log({ viewChange: event });
};

export const CalendarPage = () => {  
  return (
    <>
      <Navbar />
      <Calendar
        culture="es"
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100vh - 80px)' }}
        messages={getMessagesES()}
        eventPropGetter={eventStyleGetter}
        components={{ event: CalendarEvent }}
        onDoubleClickEvent ={onDoubleClic}
      />
    </>
  );
};
