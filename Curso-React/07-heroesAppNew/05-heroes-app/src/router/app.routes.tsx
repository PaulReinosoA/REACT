import { createBrowserRouter, Navigate } from 'react-router';
import { HomePage } from '../heroes/pages/home/HomePage';
import { HeroPage } from '@/heroes/pages/hero/HeroPage';
// import { SearchPage } from '@/heroes/pages/search/SearchPage';
import { AdminPage } from '@/admin/pages/AdminPage';
import { HeroesLayout } from '@/heroes/layouts/HeroesLayout';
import { AdminLayout } from '@/admin/layouts/AdminLayout';
import { lazy } from 'react';

//* otra forma de carga peresoza - si no hiicera la eportacion por defecto en mi componente
//* const SearchPage = lazy(() => import('@/heroes/pages/search/SearchPage').then(module=>({default:module.SearchPage})));
const SearchPage = lazy(() => import('@/heroes/pages/search/SearchPage'));

export const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <HeroesLayout />,
    children: [
      {
        index: true, //similar al '/'
        element: <HomePage />,
      },
      {
        path: 'heros/:idSlug',
        element: <HeroPage />,
      },
      {
        path: 'search',
        element: <SearchPage />,
      },
      {
        path: '*',
        element: <Navigate to="/" />,
      },
    ],
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {
        index: true, //similar al '/'
        element: <AdminPage />,
      },
    ],
  },
]);
