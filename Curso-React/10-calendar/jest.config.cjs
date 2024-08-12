module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFiles: ['./jest.setup.js'],
  transformIgnorePatterns: [
    'node_modules/(?!(query-string|decode-uri-component|split-on-first|filter-obj)/)',
  ],
    // ModuleNameMapper sólo si ocupamos importar CSS en nuestros componentes para el testing
    moduleNameMapper: {
      '\\.(css|less)$': '<rootDir>/tests/mocks/styleMock.js',
  },
};