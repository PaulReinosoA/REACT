import { useQuery } from '@tanstack/react-query';
import { getProductsActions } from '../actions/get-products.actions';
import { useSearchParams } from 'react-router';

export const useProducts = () => {
  const [searchParams] = useSearchParams();
  const limit = searchParams.get('limit') || 9;
  const page = searchParams.get('page') || 1;
  const offset = Number(page) * Number(limit);

  return useQuery({
    queryKey: ['products', { limit, offset }],
    queryFn: () =>
      getProductsActions({
        limit: isNaN(+limit) ? 9 : limit,
        offset: isNaN(offset) ? 0 : offset,
      }),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};
