import React from 'react';
import ReactDOM from 'react-dom/client';
import './i18n';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <React.Suspense fallback='Loading...'>
      <App />
    </React.Suspense>
  </React.StrictMode>,
);
