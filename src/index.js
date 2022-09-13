import React from 'react';
import {render} from 'react-dom';
import { createRoot } from 'react-dom/client';
import AppProvider from './_context';
import './index.css';
import App from './App';
import './config/i18n';

const root = createRoot(document.getElementById('root'));
root.render(<React.StrictMode>
  <AppProvider>
    <App />
  </AppProvider>
</React.StrictMode>)
