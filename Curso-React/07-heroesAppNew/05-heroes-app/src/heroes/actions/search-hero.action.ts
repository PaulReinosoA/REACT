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

export const searchHeroAction = async ({
  name,
//   strength,
//   status,
//   team,
//   category,
}: Options) => {
  const { data } = await heroApi.get<Hero>(`/search?name=${name}`);

  console.log({ data, name });
  return {
    ...data,
    image: `${BASE_URL}/images/${data.image}`,
  };
};
