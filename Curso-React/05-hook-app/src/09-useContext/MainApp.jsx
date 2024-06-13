import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';
import { AboutPage } from './AboutPage';
import { Navbar } from './Navbar';
import { UserProvider } from './context/UserProvider';

export const MainApp = () => (
  // Asi todos los componentes van a poder ver el UserProvider
  <UserProvider>
    <Navbar />
    <hr />

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="login" element={<LoginPage />} />

      {/* <Route path="/*" element={<AboutPage />} /> */}
      <Route path="/*" element={<Navigate to="/about" />} />
    </Routes>
  </UserProvider>
);
