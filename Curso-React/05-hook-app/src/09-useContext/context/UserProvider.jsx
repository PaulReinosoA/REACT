import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { UserContext } from './UserContext';

// children opcional que obiene todos los hijos children.children(ahi estan lso hijos)

// const user = {
//   id: '123',
//   name: 'Paul Reinoso',
//   email: 'paulreinoso@gmail.com',
// };

export const UserProvider = ({ children }) => {
  const [user, setuser] = useState();
  return (
    // elementos expuestos para el app
    <UserContext.Provider value={{ user, setuser }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.array.isRequired,
};
