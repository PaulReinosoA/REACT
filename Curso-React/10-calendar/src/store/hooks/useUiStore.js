import { useDispatch, useSelector } from 'react-redux';
import { onOpenDateModal, onCloseDateModal } from '../ui/uiSlice';

export const useUiStore = () => {
  const dispatch = useDispatch();

  const { isDateModalOpen: isDateModalOpen } = useSelector((state) => state.ui);

  const openDateModal = () => {
    dispatch(onOpenDateModal());
  };

  const clouseDateModal = () => {
    dispatch(onCloseDateModal());
  };

  const toggelDateModal = () => {
    // asi se usaria un toggle (opcional):
    isDateModalOpen
      ? dispatch(onCloseDateModal())
      : dispatch(onOpenDateModal());
  };

  return {
    //* properties
    isDateModalOpen,

    //* Methods
    openDateModal,
    clouseDateModal,
    toggelDateModal,
  };
};
