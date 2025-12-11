import { CustomJumbotron } from '@/components/custom/CustomJumbotron';
import { HeroesStats } from '@/heroes/components/HeroesStats';

export const SearchPage = () => {
  return (
    <>
      {/* Header */}
      <CustomJumbotron
        title="Busqueda de SuperHéroes"
        description="Descubre, explora y administra héroes y villanos"
      />
      {/* Stats Dashboard */}
      <HeroesStats />
    </>
  );
};

export default SearchPage;
