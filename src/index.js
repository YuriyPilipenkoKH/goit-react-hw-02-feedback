import React from 'react';
import  ReactDOM  from 'react-dom/client';
import  "./css/index.css";
import { App } from './components/App/App';
import { ThemeProvider } from '@emotion/react';
import { theme } from './constants/theme';
import './utils/btnAnimation'


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
     <ThemeProvider theme={theme}>
    <App></App>
    </ThemeProvider>
  </React.StrictMode>
);