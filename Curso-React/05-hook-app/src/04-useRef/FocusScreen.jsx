import React, { useRef } from 'react';

export const FocusScreen = () => {
  const title = 'focus screen';
  const inputRef = useRef(); // permite mantener referencia y si esta cambia no volvemos a ejecutar cuando la ref cambia

  const OnClick = () => {
    // document.querySelector('input').select();
    inputRef.current.select();
    // console.log(inputRef);
  };

  return (
    <>
      <h1>{title}</h1>
      <hr />
      <input
        ref={inputRef}
        type="text"
        className="form-control"
        placeholder="Ingresa tu nombre"
      />
      <button type="button" className="btn btn-primary mt-2" onClick={OnClick}>
        set focus
      </button>
    </>
  );
};
