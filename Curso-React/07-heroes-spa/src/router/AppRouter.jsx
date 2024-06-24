import { Route, Routes } from 'react-router';
import { LoginPage } from '../auth';
import { HeroesRoutes } from '../heroes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => (
  <>
    <Routes>
      {/* Se puede manejar de estas dos formas el envio de rutas */}
      {/* <Route path="login" element={<LoginPage />} /> */}
      <Route
        path="login/*"
        element={
          <PublicRoute>
            <Routes>
              <Route path="/*" element={<LoginPage />} />
            </Routes>
          </PublicRoute>
        }
      />
      <Route
        path="/*"
        element={
          <PrivateRoute>
            <HeroesRoutes />
          </PrivateRoute>
        }
      />
      {/* <Route path="/*" element={<HeroesRoutes />} /> */}
    </Routes>
  </>
);
