import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './main/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AdminApp from './app';
import { HelmetProvider } from 'react-helmet-async';

//Mode Can Be Dark or light
const darkTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
    <BrowserRouter>
    <Suspense>
      <ThemeProvider theme={darkTheme}>
        {/* <CssBaseline /> */}
        <App />
        {/* <AdminApp/> */}
      </ThemeProvider>
      </Suspense>
    </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);

