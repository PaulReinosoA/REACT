import React from 'react';
import { Route, Routes } from 'react-router';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { JournalRouter } from '../journal/routes/JournalRouter';

export const AppRouter = () => (
  <Routes>
    <Route path="/auth/*" element={<AuthRoutes />} />

    <Route path="/*" element={<JournalRouter to="/" />} />
  </Routes>
);
