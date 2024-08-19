import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage } from '../auth/pages';
import { CalendarPage } from '../calendar/pages/';
// import { getEnvVariables } from '../calendar/helpers';
import { useAuthStore } from '../store/hooks';

export const AppRouter = () => {
  const { checkAuthToken, status } = useAuthStore();
  // const authStatus = 'not-Authenticated';
  // console.log(getEnvVariables());

  useEffect(() => {
    checkAuthToken();
  }, []);

  if (status === 'checking') {
    return <h3 aria-label='h3'>Cargando...</h3>;
  }

  return (
    <Routes>
      {status === 'not-Authenticated' ? (
        <>
          <Route path="/auth/*" element={<LoginPage />} />
          <Route path="/*" element={<Navigate to="/auth/login" />} />
        </>
      ) : (
        <>
          <Route path="/" element={<CalendarPage />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </>
      )}
    </Routes>
  );
};
