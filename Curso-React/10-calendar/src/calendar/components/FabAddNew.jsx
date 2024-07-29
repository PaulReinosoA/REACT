import { addHours } from 'date-fns';
import { useUiStore } from '../../store/hooks';
import { useCalendarStore } from '../../store/hooks/useCalendarStore';

export const FabAddNew = () => {
  const { openDateModal } = useUiStore();
  const { setActiveEvent } = useCalendarStore();

  const handleClicNew = () => {
    setActiveEvent({
      title: '',
      notes: '',
      start: new Date(),
      end: addHours(new Date(), 2),
      bgColor: '#fafafa',
      user: {
        _id: '213',
        name: 'Paul',
      },
    });
    openDateModal();
  };

  return (
    <button className="btn btn-primary fab" onClick={handleClicNew}>
      <i className="fas fa-plus"></i>
    </button>
  );
};
