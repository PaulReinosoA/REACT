import { pokemonApi } from '../../../api/pokemonApi';
import { setPokemons, startLoadingPokemons } from './pokemonSlice';

// THUNKS --> FUNCIONES QUE DESPACHAN un accion ASINCRONA,
export const getPokemons = (page = 0) => {
  return async (dispatch /*getState*/) => {
    // con esto indicamos que el app esta en modo de carga
    dispatch(startLoadingPokemons());

    // TODO realizar la peticion http:
    // const resp = await fetch(
    //   `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`
    // );
    // const data = await resp.json();
    const resp = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`);
    // console.log(resp.data.results);
    dispatch(setPokemons({ pokemons: resp.data.results, page: page + 1 }));
  };
};
