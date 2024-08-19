import { fireEvent, render, screen } from '@testing-library/react';
import { FabDelete } from '../../../src/calendar/components/FabDelete';
import { Provider } from 'react-redux';
import { store } from '../../../src/store';
import { useCalendarStore } from '../../../src/store/hooks/useCalendarStore';

jest.mock('../../../src/store/hooks/useCalendarStore');

describe('pruebas sobre FabDelete.jsx', () => {
  const mockStartDeleteEvent = jest.fn();
  beforeEach(() => jest.clearAllMocks());

  test('debe de mostrar el componente correctamente', () => {
    // jest.fn().mockReturnValue
    useCalendarStore.mockReturnValue({
      hasEventSelected: false,
    });

    render(<FabDelete />);
    // screen.debug();

    const btn = screen.getByLabelText('btn-delete');

    expect(btn.classList).toContain('btn-danger');
    expect(btn.classList).toContain('fab-danger');
    expect(btn.style.display).toBe('none');
  });

  test('debe de mostrar el boton si hay un evento activo', () => {
    // jest.fn().mockReturnValue
    useCalendarStore.mockReturnValue({
      hasEventSelected: true,
    });

    render(<FabDelete />);
    screen.debug();

    const btn = screen.getByLabelText('btn-delete');

    expect(btn.style.display).toBe('');
  });

  test('debe de llamar el startDeleteEvent si esta activo', () => {
    // jest.fn().mockReturnValue
    useCalendarStore.mockReturnValue({
      hasEventSelected: true,
      starteDeleteEvent: mockStartDeleteEvent,
    });

    render(<FabDelete />);
    screen.debug();

    const btn = screen.getByLabelText('btn-delete');
    fireEvent.click(btn);
    expect(mockStartDeleteEvent).toHaveBeenCalled();
  });
});
