import {
  createContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from 'react';
import type { Hero } from '../types/heroes.interfaces';

interface FavoreHeroContext {
  //state
  favorite: Hero[];
  favoriteCount: number;

  //method
  isFavorite: (hero: Hero) => boolean;
  toggleFavorite: (hero: Hero) => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const FavoriteHeroContext = createContext<FavoreHeroContext>(
  {} as FavoreHeroContext
);

const getFavoritesFromLocalStorage = (): Hero[] => {
  const favorites = localStorage.getItem('favorites');
  return favorites ? JSON.parse(favorites) : [];
};

export const FavoriteHeroProvider = ({ children }: PropsWithChildren) => {
  const [favorites, setFavorites] = useState<Hero[]>(
    getFavoritesFromLocalStorage
  );

  const toggleFavorite = (hero: Hero) => {
    const heroExist = favorites.find((h) => h.id === hero.id);

    if (heroExist) {
      const newFavorite = favorites.filter((h) => h.id !== hero.id);
      setFavorites(newFavorite);
      return;
    }

    setFavorites([...favorites, hero]);
  };

  const isFavrorite = (hero: Hero) => {
    return favorites.some((h) => h.id === hero.id);
  };

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  return (
    <FavoriteHeroContext
      value={{
        favoriteCount: favorites.length,
        favorite: favorites,
        isFavorite: isFavrorite,
        toggleFavorite: toggleFavorite,
      }}
    >
      {children}
    </FavoriteHeroContext>
  );
};
