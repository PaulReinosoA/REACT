import { Navigate, Route, Routes } from 'react-router';
import { Navbar } from '../../ui';
import { DcPage, HeroPage, MarvelPage, Search } from '../pages';

export const HeroesRoutes = () => (
  <>
    <Navbar />
    <div className="container">
      <Routes>
        <Route path="marvel" element={<MarvelPage />} />
        <Route path="dc" element={<DcPage />} />
        <Route path="search" element={<Search />} />
        <Route path="hero/:id" element={<HeroPage />} />
        <Route path="/" element={<Navigate to="/marvel" />} />
      </Routes>
    </div>
  </>
);
