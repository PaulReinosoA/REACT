import { CustomJumbotron } from '@/components/custom/CustomJumbotron';
import { HeroesStats } from '@/heroes/components/HeroesStats';
import { SearchControls } from './ui/SearchControls';
import { CustomBreadcrumbs } from '@/components/custom/CustomBreadcrumb';
import { HeroGrid } from '@/heroes/components/HeroGrid';
import { useQuery } from '@tanstack/react-query';
import { searchHeroAction } from '@/heroes/actions/search-hero.action';
import { useSearchParams } from 'react-router';

const superHvTmp = {
  id: '',
  name: '',
  slug: '',
  alias: '',
  powers: [],
  description: '',
  strength: 0,
  intelligence: 0,
  speed: 0,
  durability: 0,
  team: '',
  image: '',
  firstAppearance: '',
  status: '',
  category: '',
  universe: '',
};

export const SearchPage = () => {
  //todo use query name with url
  const [searchParams] = useSearchParams();

  const name = searchParams.get('name') ?? '';
  const strength = Number(searchParams.get('strength') ?? '0');

  const { data: superHv = [superHvTmp] } = useQuery({
    queryKey: ['search', { name,strength }],
    queryFn: () => searchHeroAction({ name, strength }),
    staleTime: 1000 * 60 * 5, //o puede no ir para no prevalecer la informacion en cache
    retry: false,
  });

  console.log({ superHv });

  return (
    <>
      {/* Header */}
      <CustomJumbotron
        title="Busqueda de SuperHéroes"
        description="Descubre, explora y administra héroes y villanos"
      />
      <CustomBreadcrumbs
        currentPage="Buscados de heroes"
        // breadcrumbs={[
        //   { label: 'Home', to: '/' },
        //   { label: 'Home2', to: '/' },
        // ]}
      />
      {/* Stats Dashboard */}
      <HeroesStats />

      {/* Controls */}
      <SearchControls />

      {superHv && (
        <HeroGrid
          heroesResponse={{
            total: 0,
            pages: 0,
            heroes: superHv,
          }}
        />
      )}
    </>
  );
};

export default SearchPage;
