import type { User } from '@/interfaces/user.interfaces';
import { create } from 'zustand';
import { loginAction } from '../actions/login.action';

type AuthStatus = 'checking' | 'authenticated' | 'not-authenticated';

type AuthStore = {
  //* properties --> solo lectura, valores de estado
  user: User | null;
  token: string | null;
  authStatus?: AuthStatus;

  //* getters -->  valores computados a partir del estado

  //* actions --> funciones que modifican el store
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
};

export const useAuthStore = create<AuthStore>()((set) => ({
  //implementacion del store
  user: null,
  token: null,
  authStatus: 'checking',

  login: async (email: string, password: string) => {
    try {
      const data = await loginAction(email, password);
      localStorage.setItem('token', data.token);
      set({ user: data.user, token: data.token });
      return true;
    } catch (error) {
      console.error('Login failed:', error);
      localStorage.removeItem('token');
      set({ user: null, token: null });
      return false;
    }
  },
  logout: () => {
    localStorage.removeItem('token');
    set({ user: null, token: null });
  },
}));
