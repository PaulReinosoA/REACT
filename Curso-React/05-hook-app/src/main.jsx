import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { SimpleForm } from './02-useEffect/SimpleForm';
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
// import { CounterApp } from './01-useState/CounterApp.jsx';
// import { HooksApp } from './HooksApp.jsx';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SimpleForm />
  </React.StrictMode>,
);
