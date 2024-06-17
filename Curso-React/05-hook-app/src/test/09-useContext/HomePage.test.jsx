import { render, screen } from '@testing-library/react';
import { HomePage } from '../../09-useContext/HomePage';
import { UserContext } from '../../09-useContext/context/UserContext';

describe('pruebas sobre HomePage', () => {
  const user = {
    id: '123',
    name: 'Paul Reinoso',
    email: 'paulreinoso@gmail.com',
  };

  test('Debe de mnostar el componnete sin el usuario ', () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <HomePage />
      </UserContext.Provider>,
    );
    // screen.debug();
    const preTag = screen.getByLabelText('pre');
    expect(preTag.innerHTML).toBe('null');
  });

  test('Debe de mnostar el componnete sin el usuario ', () => {
    render(
      <UserContext.Provider value={{ user }}>
        <HomePage />
      </UserContext.Provider>,
    );
    // screen.debug();
    const preTag = screen.getByLabelText('pre');
    expect(preTag.innerHTML).toBe(JSON.stringify(user, null, 3));
  });
});
