import React from 'react';
import { useFetch } from '../01-useState/Hooks/useFetch';
import { useCounter } from '../01-useState/Hooks/useCounter';
import { LoaginMessage } from './LoaginMessage';
import { PokemonCard } from './PokemonCard';

export const MultipleCustomHook = () => {
  const { counter, decremet, increment } = useCounter(1);
  const { data, isLoading } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${counter}`,
  );
  return (
    <>
      <div>Informacion Pokemon</div>
      <hr />
      {isLoading ? (
        <LoaginMessage />
      ) : (
        <PokemonCard
          name={data?.name}
          id={data?.id}
          sprites={[
            data?.sprites.front_default,
            data?.sprites.back_default,
            data?.sprites.front_shiny,
            data?.sprites.back_shiny,
          ]}
        />
      )}
      <h1>{data?.name}</h1>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => (counter > 1 ? decremet() : null)} // un null es valido en un evento clic
      >
        Anterior
      </button>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          increment();
        }}
      >
        Siguiente
      </button>
    </>
  );
};

// https://pokeapi.co/api/v2/pokemon/ditto
