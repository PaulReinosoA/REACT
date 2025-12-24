import { CustomPagination } from '@/components/custom/CustomPagination';
import { products } from '@/mocks/products.mock';
import { CustomJumbotron } from '@/shop/components/CustomJumbotron';
import { ProductsGrid } from '@/shop/components/ProductsGrid';

export const HomePage = () => {
  return (
    <>
      <CustomJumbotron
        title="Tesla Style"
        subTitle="Ropa minimalista y elegante inspirada en el diseño futurista de Tesla. Calidad premium para un estilo atemporal."
      />

      <ProductsGrid products={products} />

      <CustomPagination totalPages={10} />
    </>
  );
};
