import { Navigate, Route, Routes } from 'react-router';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { JournalRouter } from '../journal/routes/JournalRouter';
import { CheckingAuth } from '../ui';
import { useCheckingAuth } from '../hooks';

export const AppRouter = () => {
  const { status } = useCheckingAuth();

  if (status === 'checking') {
    return <CheckingAuth />;
  }

  return (
    <Routes>
      {status === 'authenticated' ? (
        <Route path="/*" element={<JournalRouter to="/" />} />
      ) : (
        <Route path="/auth/*" element={<AuthRoutes />} />
      )}

      <Route path="/*" element={<Navigate to="/auth/login" />} />
      {/* Login y registro */}
      {/* <Route path="/auth/*" element={<AuthRoutes />} /> */}
      {/* journal app */}
      {/* <Route path="/*" element={<JournalRouter to="/" />} /> */}
    </Routes>
  );
};
