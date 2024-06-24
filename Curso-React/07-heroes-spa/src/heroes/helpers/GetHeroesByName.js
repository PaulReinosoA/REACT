import { heroes } from '../data/heroes';

export const GetHeroesByName = (name = '') => {
  const nameClen = name.toLocaleLowerCase().trim();  
  if (nameClen.length === 0) return [];

  const heroesFilter = heroes.filter((hero) =>
    hero.superhero.toLocaleLowerCase().includes(nameClen)
  );
  // console.log({heroesFilter,nameClen});
  return heroesFilter;
};
