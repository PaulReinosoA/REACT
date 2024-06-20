import { heroes } from '../data/heroes';

export const GetHeroById = (id) => heroes.find((hero) => hero.id === id);
