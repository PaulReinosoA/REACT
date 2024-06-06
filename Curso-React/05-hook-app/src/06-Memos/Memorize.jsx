import React, { useState } from 'react';
import { useCounter } from '../01-useState/Hooks/useCounter';
import { Small } from './Small';

export const Memorize = () => {
  const { counter, increment } = useCounter(10);
  const [show, setshow] = useState(true);
  return (
    <>
      <h1>
        Counter: <Small value={counter} />
      </h1>
      <hr />
      <button
        type="button"
        className="btn btn-primary mt-2"
        onClick={() => increment()}
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
