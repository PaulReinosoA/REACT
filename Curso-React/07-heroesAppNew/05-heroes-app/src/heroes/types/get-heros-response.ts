import type { Hero } from './heroes.interfaces';

export interface HeroesResponse {
  total: number;
  pages: number;
  heroes: Hero[];
}
