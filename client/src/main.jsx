import { StrictMode } from 'react';
import React from 'react';
import { createRoot } from 'react-dom/client'; // Doğru import yolu
import './index.css';
import App from './App.jsx';
import ErrorBoundary from './ErrorBoundary.jsx';

// Kök (root) elemanını bul
const rootElement = document.getElementById('root');

// createRoot ile render et
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>
);