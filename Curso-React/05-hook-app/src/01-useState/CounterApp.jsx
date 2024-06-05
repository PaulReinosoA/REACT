import React, { useState } from 'react';

export const CounterApp = () => {
  const [counter, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });

  const { counter1, counter2, counter3 } = counter;
  return (
    <>
      <h1>Counter1: {counter1}</h1>
      <h1>Counter2: {counter2}</h1>
      <h1>Counter3: {counter3}</h1>
      <hr />
      <button
        className="btn"
        type="button"
        onClick={() =>
          setCounter({
            ...counter, // esta desestructuracion esparce todos los cambios y solo cambiamos uno
            counter1: counter1 + 1,
            // counter1: counter.counter1 + 1,
            // counter2: counter.counter2,
            // counter3: counter.counter3,
          })
        }
      >
        +1
      </button>
    </>
  );
};
