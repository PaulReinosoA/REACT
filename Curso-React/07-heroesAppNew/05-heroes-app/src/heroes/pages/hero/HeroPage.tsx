import { CustomBreadcrumbs } from '@/components/custom/CustomBreadcrumb';

export const HeroPage = () => {
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
