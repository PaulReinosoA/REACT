import { fireEvent, render, screen } from '@testing-library/react';
import { UserContext } from '../../09-useContext/context/UserContext';
import { LoginPage } from '../../09-useContext/LoginPage';

describe('tests sobre LoginPage', () => {
  const user = {
    id: '123',
    name: 'Paul Reinoso',
    email: 'paulreinoso@gmail.com',
  };

  test('debe de mostrar el componente sin el susuario ', () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>,
    );
    // screen.debug();
    const preTag = screen.getByLabelText('span');
    expect(preTag.innerHTML).toBe('null');
  });

  test('debe de llamar el setUser cuando se hace click en el boton', () => {
    const setUserMoock = jest.fn();
    render(
      <UserContext.Provider value={{ user, setuser: setUserMoock }}>
        <LoginPage />
      </UserContext.Provider>,
    );
    const buttonElemenet = screen.getByText('Establecer usuario');
    fireEvent.click(buttonElemenet);

    expect(setUserMoock).toHaveBeenCalledWith(user);
  });
});
