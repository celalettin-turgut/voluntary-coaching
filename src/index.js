import React from 'react';
import {render} from 'react-dom';
import AppProvider from './_context';
import './index.css';
import App from './App';
import './config/i18n';

render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
