import React from 'react';
import ReactDOM from 'react-dom/client';
import { /* BrowserRouter, */ HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { JournalApp } from './JournalApp.jsx';
import './styles.css';
import { store } from './store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <HashRouter> en lugar de -> </BrowserRouter> -> CORRIGE REDIRECIONAMIENTO AL RECARGAR LOGIN */}
      <HashRouter>
        <JournalApp />
      </HashRouter>
    </Provider>
  </React.StrictMode>,
);
