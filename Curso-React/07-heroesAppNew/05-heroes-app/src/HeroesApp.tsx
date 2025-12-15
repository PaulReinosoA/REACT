import { RouterProvider } from 'react-router';
import { AppRouter } from './router/app.routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

export const HeroesApp = () => {
  return (
    <>
      {/* QueryClientProvider Gestor de estados */}
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={AppRouter} />
        {/* ReactQueryDevtools herramientas para ver la gestion de estados */}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
};
