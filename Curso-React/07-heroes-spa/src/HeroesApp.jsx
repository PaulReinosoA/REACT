import { AuthProvider } from './auth';
import { AppRouter } from './router/AppRouter';

export const HeroesApp = () => (
  // const title = 'HeroesApp';
  <>
    <AuthProvider>
      <AppRouter children={{}} />
    </AuthProvider>
  </>
);
