import { heroes } from '../data/heroes';

export const GetHeroesByName = (name = '') => {
  const nameClen = name.toLocaleLowerCase().trim();
  if (nameClen.length === 0) return [];
  return heroes.filter((hero) =>
    hero.superhero.toLocaleLowerCase().includes(nameClen),
  );
};
