import { types } from '../../../auth/types/types';

describe('Pruebas sombre types.test ', () => {
  test('Debe regresar estos types', () => {
    expect(types).toEqual({
      login: '[Auth] Login',
      logout: '[Auth] Logout',
    });
  });
});
