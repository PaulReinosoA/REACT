import React, { useState } from 'react';
import { useCounter } from '../01-useState/Hooks/useCounter';

const heavyStock = (iterationNumber = 100) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log(`ahi vamos...${i}`);
  }
  return `${iterationNumber} iteraciones realizadas`;
};

export const MemorizeHook = () => {
  const { counter, increment } = useCounter(4000);
  const [show, setshow] = useState(true);
  return (
    <>
      <h1>
        Counter: <small>{counter}</small>
      </h1>
      <hr />
      <h4>{heavyStock(5000)}</h4>
      <button
        type="button"
        className="btn btn-primary mt-2"
        onClick={() => increment(1)}
      >
        +1
      </button>
      <button
        type="button"
        className="btn btn-primary mt-2"
        onClick={() => setshow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
