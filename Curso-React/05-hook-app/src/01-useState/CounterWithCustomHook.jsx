import React from 'react';
import { useCounter } from './Hooks/useCounter';

export const CounterWithCustomHook = () => {
  const { counter, increment, decremet, reset } = useCounter();
  return (
    <>
      <h1>Counter with hook: {counter}</h1>
      <hr />
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => increment(1)}
      >
        +1
      </button>
      <button type="button" className="btn btn-primary" onClick={() => reset()}>
        Reset
      </button>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => decremet()}
      >
        -1
      </button>
    </>
  );
};
