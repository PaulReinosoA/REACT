import { heroes } from '../data/heroes';

export const getHeroesByPublisher = (publisher) => {
  const validarPublisher = ['DC Comics', 'Marvel Comics'];
  if (!validarPublisher.includes(publisher))
    throw new Error(`${publisher} is not valid Publisher`);
  return heroes.filter((h) => h.publisher === publisher);
};
