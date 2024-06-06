import React, { useEffect, useState } from 'react';

// mensaje para cuando muestro el componente o lo destruyo
export const Message = () => {
  const [cords, setcords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = ({ x, y }) => {
      // const cords = { x, y };
      setcords({ x, y });
      // console.log(cords);
    };

    window.addEventListener('mousemove', onMouseMove);
    // funcion de limpieza // si no remuevo
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <>
      <h3>Usuario ya existe</h3>
      {JSON.stringify(cords)}
    </>
  );
};
