import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemProvider } from './store/ThemeContext';
import { MainProvider } from './store/MainContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <ThemProvider>
      <MainProvider>
        <App />
      </MainProvider>
    </ThemProvider>
  </React.StrictMode>,
);
