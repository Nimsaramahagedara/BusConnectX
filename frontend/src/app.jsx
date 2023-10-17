// eslint-disable perfectionist/sort-imports
import { HelmetProvider } from 'react-helmet-async';
import './global.css';

import { useScrollToTop } from './hooks/use-scroll-to-top';
import AdminRouter from './routes/sections';

import Router from './routes/sections';
import ThemeProvider from './theme';

// ----------------------------------------------------------------------

export default function AdminApp() {
  useScrollToTop();

  return (
<ThemeProvider>
  <AdminRouter/>
</ThemeProvider>
      
  );
}
