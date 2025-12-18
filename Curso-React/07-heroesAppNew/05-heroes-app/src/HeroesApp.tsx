import { RouterProvider } from 'react-router';
import { AppRouter } from './router/app.routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { FavoriteHeroProvider } from './heroes/context/FavoriteHeroContext';

const queryClient = new QueryClient();

export const HeroesApp = () => {
  return (
    <>
      {/* QueryClientProvider Gestor de estados */}
      <QueryClientProvider client={queryClient}>
        <FavoriteHeroProvider>
          <RouterProvider router={AppRouter} />
          {/* ReactQueryDevtools herramientas para ver la gestion de estados */}
          <ReactQueryDevtools initialIsOpen={false} />
        </FavoriteHeroProvider>
      </QueryClientProvider>
    </>
  );
};
