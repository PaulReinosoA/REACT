import React from 'react';
import { Navigate, Route, Routes } from 'react-router';
import { JournalPage } from '../pages/JournalPage';
import { DataGridPage } from '../pages/DataGridPage';

export const JournalRouter = () => (
  <Routes>
    <Route path="/" element={<JournalPage />} />
    <Route path="/dataGrid" element={<DataGridPage />} />
    <Route path="/*" element={<Navigate to="/" />} />
  </Routes>
);
