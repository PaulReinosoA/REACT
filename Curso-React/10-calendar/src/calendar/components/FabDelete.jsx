import { useCalendarStore } from '../../store/hooks/useCalendarStore';

export const FabDelete = () => {
  const { starteDeleteEvent, hasEventSelected } = useCalendarStore();

  const handleDleteNew = () => {
    starteDeleteEvent();
  };

  return (
    <button
      className="btn btn-danger fab-danger"
      onClick={handleDleteNew}
      style={{ display: hasEventSelected ? '' : 'none' }}
    >
      <i className="fas fa-trash-alt"></i>
    </button>
  );
};
