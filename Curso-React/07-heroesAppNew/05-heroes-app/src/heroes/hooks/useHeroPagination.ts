import { useQuery } from '@tanstack/react-query';
import { getHeroesByPageAction } from '../actions/get-heroes-by-page.action';

export const useHeroPagination = (
  activePage: string,
  activelimit: string,
  activeCategory: string = 'all'
) => {
  return useQuery({
    queryKey: [
      'heroes',
      { page: activePage, limit: activelimit, category: activeCategory },
    ],
    queryFn: () =>
      getHeroesByPageAction(+activePage, +activelimit, activeCategory),
    staleTime: 1000 * 60 * 5, //5 minutos
  });
};
