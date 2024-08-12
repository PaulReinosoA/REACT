export const initialState = {
  status: 'checking', // Authenticated, not-Authenticated
  user: {},
  errorMessage: undefined,
};

export const AuthenticatedState = {
  status: 'Authenticated', // Authenticated, not-Authenticated
  user: {
    uid: 'abc',
    name: 'Paul',
  },
  errorMessage: undefined,
};

export const notAuthenticatedState = {
  status: 'not-Authenticated', // Authenticated, not-Authenticated
  user: {},
  errorMessage: undefined,
};
