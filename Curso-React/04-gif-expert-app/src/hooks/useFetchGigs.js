import { useEffect, useState } from 'react';
import { getGifs } from '../Helpers/getGifs';

// un funtional component retorna un jsx
export const useFetchGigs = (category) => {
  const [images, setimages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setimages(newImages);
    setIsLoading(false);
  };
  // Hook de react dispara efectos secundarios procesos que se disparan cuando algo suceda cuando
  // el counter cambio o el objeto se renderice por primera vez,... etc.
  useEffect(() => {
    // usa dos argumentos callback,lista de dependencias (Condiciones para ejecutar el callback)
    getImages(); // no se hace-->>> no se llama al compoente  directamenet-->useEffect
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // si las dependencias estan vacias [] disparamos solo una vez al generar le componente

  return {
    images, // images: images,
    isLoading, // isLoading: isLoading,
  };
};
