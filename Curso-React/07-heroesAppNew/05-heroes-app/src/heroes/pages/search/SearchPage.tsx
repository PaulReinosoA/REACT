import { CustomJumbotron } from '@/components/custom/CustomJumbotron';
import { HeroesStats } from '@/heroes/components/HeroesStats';
import { SearchControls } from './ui/SearchControls';
import { CustomBreadcrumbs } from '@/components/custom/CustomBreadcrumb';

export const SearchPage = () => {
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
    </>
  );
};

export default SearchPage;
