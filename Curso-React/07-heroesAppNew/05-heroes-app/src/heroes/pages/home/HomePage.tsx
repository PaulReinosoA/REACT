import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CustomJumbotron } from '@/components/custom/CustomJumbotron';
import { HeroesStats } from '@/heroes/components/HeroesStats';
import { SearchControls } from '../search/ui/SearchControls';
import { HeroGrid } from '@/heroes/components/HeroGrid';
import { useState } from 'react';
import { CustomPagination } from '@/components/custom/CustomPagination';
import { CustomBreadcrumbs } from '@/components/custom/CustomBreadcrumb';

export const HomePage = () => {
  const [activeTab, setActiveTab] = useState<
    'all' | 'favorites' | 'heroes' | 'villains'
  >('all');

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
        <Tabs value={activeTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all" onClick={() => setActiveTab('all')}>
              All Characters (16)
            </TabsTrigger>
            <TabsTrigger
              value="favorites"
              onClick={() => setActiveTab('favorites')}
              className="flex items-center gap-2"
            >
              Favorites (3)
            </TabsTrigger>
            <TabsTrigger value="heroes" onClick={() => setActiveTab('heroes')}>
              Heroes (12)
            </TabsTrigger>
            <TabsTrigger
              value="villains"
              onClick={() => setActiveTab('villains')}
            >
              Villains (2)
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            {/*Mostrar todos los personajes*/}
            <h1>all</h1>
            <HeroGrid />
          </TabsContent>
          <TabsContent value="favorites">
            {/*Mostrar todos los favorites*/}
            <h1>favorites</h1>
            <HeroGrid />
          </TabsContent>
          <TabsContent value="heroes">
            {/*Mostrar todos los heroes*/}
            <h1>heroes</h1>
            <HeroGrid />
          </TabsContent>
          <TabsContent value="villains">
            {/*Mostrar todos los villains*/}
            <h1>villains</h1>
            <HeroGrid />
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
