import { CustomBreadcrumbs } from '@/components/custom/CustomBreadcrumb';
import { useParams } from 'react-router';

export const HeroPage = () => {
  const { idSlug = '' } = useParams();
  console.log({ idSlug });

  return (
    <div>
      <CustomBreadcrumbs
        currentPage="heroe"
        // breadcrumbs={[
        //   { label: 'Home', to: '/' },
        //   { label: 'Home2', to: '/' },
        // ]}
      />
    </div>
  );
};
