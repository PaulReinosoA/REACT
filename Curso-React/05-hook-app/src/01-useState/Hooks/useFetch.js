import { useEffect, useState } from 'react';

const localCache = {};

export const useFetch = (url) => {
  const [state, setstate] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    error: null,
  });

  const setLoadingState = () => {
    setstate({
      data: null,
      isLoading: true,
      hasError: false,
      error: null,
    });
  };

  const getFetch = async () => {
    // USAMOS CACHE LOCAL : ==>>>https://tanstack.com/query/latest Usa cacche y valida
    if (localCache[url]) {
      // console.log('usando cache!');
      setstate({
        data: localCache[url],
        isLoading: false,
        hasError: false,
        error: null,
      });
      return;
    }

    setLoadingState();
    const resp = await fetch(url);
    await new Promise((resolve) => setTimeout(resolve, 1500)); // sleep para ver el cargando..
    if (!resp.ok) {
      setstate({
        data: null,
        isLoading: false,
        hasError: true,
        error: { code: resp.status, message: resp.message },
      });
      return;
    }
    const data = await resp.json();

    setstate({
      data,
      isLoading: false,
      hasError: false,
      error: null,
    });

    // manejoi cache
    localCache[url] = data;
  };

  useEffect(() => {
    getFetch();
  }, [url]); //  esto hace que no redibuje

  return {
    ...state,
  };
};
