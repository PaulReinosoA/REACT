#Configuracion para ambientes de test
- Los siguientes archivos deben crearse a nibel del node modules:

# React + Vite + jest
# 1. Instalaciones:

npm install --save-dev @types/jest
npm install --save-dev babel-preset-jest
npm install --save-dev @testing-library/jest-dom

# 2. Opcional: Si usamos Fetch API en el proyecto:
--forma nativa de fetch para peticiones http:
npm install whatwg-fetch --save

# 3. Actualizar los scripts del package.json:
"scripts: {
  ...
  "test": "jest --watchAll"

#4. Crear la configuración de babel babel.config.cjs

module.exports = {
    presets: [
        [ '@babel/preset-env', { targets: { esmodules: true } } ],
        [ '@babel/preset-react', { runtime: 'automatic' } ],
    ],
};

#5.Opcional, pero eventualmente necesario, crear Jest config y setup:
#jest.config.cjs

module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js']
}
#jest.setup.js
// En caso de necesitar la implementación del FetchAPI
import 'whatwg-fetch'; // <-- npm i whatwg-fetch

# 6. Opcional: Instalamos jest-environment-jsdom en el proyecto:
npm install --save-dev jest-environment-jsdom

###INSTALACIONES ADICIONALES PARA ARCHIVO BABEL:

npm install --save-dev @babel/preset-react
npm install --save-dev @babel/preset-env

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh