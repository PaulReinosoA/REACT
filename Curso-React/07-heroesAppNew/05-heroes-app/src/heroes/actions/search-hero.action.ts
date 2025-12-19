import { heroApi } from '../api/hero.api';
import type { Hero } from '../types/heroes.interfaces';

interface Options {
  name?: string;
  team?: string;
  category?: string;
  universe?: string;
  status?: string;
  strength?: number;
}

const BASE_URL = import.meta.env.VITE_API_URL;

export const searchHeroAction = async (option: Options = {}) => {
  const { name, team, category, universe, status, strength } = option;

  if (!name && !team && !category && !universe && !status && !strength) {
    return [];
  }

  const { data } = await heroApi.get<Hero[]>(`/search`, {
    params: {
      name,
      team,
      category,
      universe,
      status,
      strength,
    },
  });

  return data.map((hero) => ({
    ...hero,
    image: `${BASE_URL}/images/${hero.image}`,
  }));
};
