import { useQuery } from '@tanstack/react-query';
import { getProductsActions } from '../actions/get-products.actions';

export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: getProductsActions,
  });
};
