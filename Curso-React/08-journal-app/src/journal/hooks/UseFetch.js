import { useEffect, useState } from 'react';

export const UseFetch = (url) => {
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
    setLoadingState();
    const resp = await fetch(url);
    if (!resp.ok) {
      setstate({
        data: null,
        isLoading: false,
        hasError: true,
        error: { code: resp.status, message: resp.message },
      });
      return;
    }
    const { data } = await resp.json();

    setstate({
      data,
      isLoading: false,
      hasError: false,
      error: null,
    });
  };
  useEffect(() => {
    getFetch();
  }, []);

  return {
    ...state,
  };
};
