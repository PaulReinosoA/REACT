import React from 'react'
import { createRoot } from 'react-dom/client'
import { GifExpertApp } from './GifExpertApp.jsx';
import './styles.css';

const root = createRoot(document.getElementById('root'));
root.render( 
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>,
);




