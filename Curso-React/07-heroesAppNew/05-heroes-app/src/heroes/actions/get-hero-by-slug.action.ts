import { heroApi } from '../api/hero.api';
import type { Hero } from '../types/heroes.interfaces';

const BASE_URL = import.meta.env.VITE_API_URL;

export const getHeroBySlugAction = async (idSlug: string) => {
  const { data } = await heroApi.get<Hero>(`/${idSlug}`);
  return {
    ...data,
    image: `${BASE_URL}/images/${data.image}`,
  };
};
