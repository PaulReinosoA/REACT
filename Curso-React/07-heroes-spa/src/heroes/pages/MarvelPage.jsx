import { HeroesList } from '../components';

export const MarvelPage = () => {
  const publisher = 'Marvel Comics';
  return (
    <>
      <h1>Marvel Heroes:</h1>
      <hr />
      <HeroesList publisher={publisher} />
    </>
  );
};
