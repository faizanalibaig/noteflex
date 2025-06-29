import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CookiesProvider } from 'react-cookie';
import './index.css';
import App from './App.jsx';

const query = new QueryClient();
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CookiesProvider>
      <QueryClientProvider client={query}>
        <StrictMode>
          <App />
        </StrictMode>
      </QueryClientProvider>
    </CookiesProvider>
  </BrowserRouter>
);
