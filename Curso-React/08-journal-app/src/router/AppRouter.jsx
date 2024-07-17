import React from 'react';
import { Route, Routes } from 'react-router';
import { useSelector } from 'react-redux';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { JournalRouter } from '../journal/routes/JournalRouter';
import { CheckingAuth } from '../ui';

export const AppRouter = () => {
  const { status } = useSelector((state) => state.auth);
  console.log(status);
  if (status === 'checking') {
    return <CheckingAuth />;
  }
  return (
    <Routes>
      <Route path="/auth/*" element={<AuthRoutes />} />

      <Route path="/*" element={<JournalRouter to="/" />} />
    </Routes>
  );
};
