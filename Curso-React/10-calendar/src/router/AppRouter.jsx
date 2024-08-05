import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage } from '../auth/pages';
import { CalendarPage } from '../calendar/pages/';
import { getEnvVariables } from '../calendar/helpers';

export const AppRouter = () => {
  const authStatus = 'Authenticated';
  console.log(getEnvVariables());
  return (
    <Routes>
      {authStatus === 'not-Authenticated' ? (
        <Route path="/auth/*" element={<LoginPage />} />
      ) : (
        <Route path="/*" element={<CalendarPage />} />
      )}
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
