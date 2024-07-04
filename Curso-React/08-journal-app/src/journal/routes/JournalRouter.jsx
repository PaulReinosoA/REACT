import React from 'react';
import { Navigate, Route, Routes } from 'react-router';
import { JournalPage } from '../pages/JournalPage';
import { DataGridPage } from '../pages/DataGridPage';
import { ChartPage } from '../pages/ChartPage';

export const JournalRouter = () => (
  <Routes>
    <Route path="/" element={<JournalPage />} />
    <Route path="/dataGrid" element={<DataGridPage />} />
    <Route path="/chart" element={<ChartPage />} />
    <Route path="/*" element={<Navigate to="/" />} />
  </Routes>
);
