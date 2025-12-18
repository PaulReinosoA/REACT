import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CustomJumbotron } from '@/components/custom/CustomJumbotron';
import { HeroesStats } from '@/heroes/components/HeroesStats';
import { SearchControls } from '../search/ui/SearchControls';
import { HeroGrid } from '@/heroes/components/HeroGrid';
import { useContext, useMemo } from 'react';
import { CustomPagination } from '@/components/custom/CustomPagination';
import { CustomBreadcrumbs } from '@/components/custom/CustomBreadcrumb';
import { useSearchParams } from 'react-router';
import { useHeroPagination } from '@/heroes/hooks/useHeroPagination';
import { FavoriteHeroContext } from '@/heroes/context/FavoriteHeroContext';
import { useHeroSummary } from '@/heroes/hooks/useHeroSummary';

export const HomePage = () => {
  // const { data: summary } = useQuery({
  //   queryKey: ['summary-information'],
  //   queryFn: () => getSummaryAction(),
  //   staleTime: 1000 * 60 * 5, //5 mins
  // });

  const { data: summary } = useHeroSummary();

  // permite el uso de los params del url obtenerlos o setearlos
  const [searchParams, setSearchParams] = useSearchParams();

  const activeTab = searchParams.get('tab') ?? 'all';
  const activePage = searchParams.get('page') ?? '1';
  const activelimit = searchParams.get('limit') ?? '6';
  const activeCategory = searchParams.get('category') ?? 'all';

  const selectedTab = useMemo(() => {
    const validTabs = ['all', 'favorites', 'heroes', 'villains'];
    return validTabs.includes(activeTab) ? activeTab : 'all';
  }, [activeTab]);

  // const { data } = useQuery({
  //   queryKey: ['heroes', { page: activePage, limit: activelimit }],
  //   queryFn: () => getHeroesByPageAction(+activePage, +activelimit),
  //   staleTime: 1000 * 60 * 5, //5 minutos
  // });

  const { data } = useHeroPagination(activePage, activelimit, activeCategory);

  const heroesResponse =
    data === undefined ? { total: 0, pages: 0, heroes: [] } : data; // <- lectura segura
  console.log(heroesResponse);

  const { favoriteCount, favorite } = useContext(FavoriteHeroContext);

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
                  prev.set('category', 'all');
                  prev.set('page', '1');
                  return prev;
                })
              }
            >
              All Characters ({summary?.totalHeroes})
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
              Favorites ({favoriteCount})
            </TabsTrigger>
            <TabsTrigger
              value="heroes"
              onClick={() =>
                setSearchParams((prev) => {
                  prev.set('tab', 'heroes');
                  prev.set('category', 'hero');
                  prev.set('page', '1');
                  return prev;
                })
              }
            >
              Heroes ({summary?.heroCount})
            </TabsTrigger>
            <TabsTrigger
              value="villains"
              onClick={() =>
                setSearchParams((prev) => {
                  prev.set('tab', 'villains');
                  prev.set('category', 'villain');
                  prev.set('page', '1');
                  return prev;
                })
              }
            >
              Villains ({summary?.villainCount})
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
            <HeroGrid
              heroesResponse={{ total: 0, pages: 0, heroes: favorite }}
            />
          </TabsContent>
          <TabsContent value="heroes">
            {/*Mostrar todos los heroes*/}
            <h1>heroes</h1>
            <HeroGrid heroesResponse={heroesResponse} />
          </TabsContent>
          <TabsContent value="villains">
            {/*Mostrar todos los villains*/}
            <h1>villains</h1>
            <HeroGrid heroesResponse={heroesResponse} />
          </TabsContent>
        </Tabs>

        {/* Character Grid */}
        {/* <HeroGrid /> */}

        {/* Pagination */}
        {selectedTab !== 'favorites' && (
          <CustomPagination totalPages={heroesResponse?.pages ?? 1} />
        )}
      </>
    </>
  );
};
