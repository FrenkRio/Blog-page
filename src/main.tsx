import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* Le routeur enveloppe toute l'application. C'est parfait. */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);