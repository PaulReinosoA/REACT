import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CustomJumbotron } from '@/components/custom/CustomJumbotron';
import { HeroesStats } from '@/heroes/components/HeroesStats';
import { SearchControls } from '../search/ui/SearchControls';
import { HeroGrid } from '@/heroes/components/HeroGrid';
import { useMemo } from 'react';
import { CustomPagination } from '@/components/custom/CustomPagination';
import { CustomBreadcrumbs } from '@/components/custom/CustomBreadcrumb';
import { getHeroesByPageAction } from '@/heroes/actions/get-heroes-by-page.action';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router';

export const HomePage = () => {
  // permite el uso de los params del url obtenerlos o setearlos
  const [searchParams, setSearchParams] = useSearchParams('all');

  const activeTab = searchParams.get('tab') ?? 'all';
  const activePage = searchParams.get('page') ?? '1';

  const selectedTab = useMemo(() => {
    const validTabs = ['all', 'favorites', 'heroes', 'villains'];
    return validTabs.includes(activeTab) ? activeTab : 'all';
  }, [activeTab]);

  const { data } = useQuery({
    queryKey: ['heroes'],
    queryFn: () => getHeroesByPageAction(+activePage),
    staleTime: 1000 * 60 * 5, //5 minutos
  });

  const heroesResponse =
    data === undefined ? { total: 0, pages: 0, heroes: [] } : data; // <- lectura segura
  console.log(heroesResponse);

  return (
    <>
      <>
        {/* Header */}
        <CustomJumbotron
          title="Universo de SuperHéroes"
          description="Descubre, explora y administra héroes y villanos"
        />
        <CustomBreadcrumbs
          currentPage=""
          // breadcrumbs={[
          //   { label: 'Home', to: '/' },
          //   { label: 'Home2', to: '/' },
          // ]}
        />

        {/* Stats Dashboard */}
        <HeroesStats />

        {/* Controls */}
        <SearchControls />

        {/* Tabs */}
        <Tabs value={selectedTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger
              value="all"
              onClick={() =>
                setSearchParams((prev) => {
                  prev.set('tab', 'all');
                  return prev;
                })
              }
            >
              All Characters (16)
            </TabsTrigger>
            <TabsTrigger
              value="favorites"
              onClick={() =>
                setSearchParams((prev) => {
                  prev.set('tab', 'favorites');
                  return prev;
                })
              }
              className="flex items-center gap-2"
            >
              Favorites (3)
            </TabsTrigger>
            <TabsTrigger
              value="heroes"
              onClick={() =>
                setSearchParams((prev) => {
                  prev.set('tab', 'heroes');
                  return prev;
                })
              }
            >
              Heroes (12)
            </TabsTrigger>
            <TabsTrigger
              value="villains"
              onClick={() =>
                setSearchParams((prev) => {
                  prev.set('tab', 'villains');
                  return prev;
                })
              }
            >
              Villains (2)
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            {/*Mostrar todos los personajes*/}
            <h1>all</h1>
            <HeroGrid heroesResponse={heroesResponse} />
          </TabsContent>
          <TabsContent value="favorites">
            {/*Mostrar todos los favorites*/}
            <h1>favorites</h1>
            <HeroGrid heroesResponse={{ total: 0, pages: 0, heroes: [] }} />
          </TabsContent>
          <TabsContent value="heroes">
            {/*Mostrar todos los heroes*/}
            <h1>heroes</h1>
            <HeroGrid heroesResponse={{ total: 0, pages: 0, heroes: [] }} />
          </TabsContent>
          <TabsContent value="villains">
            {/*Mostrar todos los villains*/}
            <h1>villains</h1>
            <HeroGrid heroesResponse={{ total: 0, pages: 0, heroes: [] }} />
          </TabsContent>
        </Tabs>

        {/* Character Grid */}
        {/* <HeroGrid /> */}

        {/* Pagination */}
        <CustomPagination totalPages={7} />
      </>
    </>
  );
};
