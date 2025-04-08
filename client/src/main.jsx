import { StrictMode } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './index.css';
import App from './App.jsx';

const query = new QueryClient();
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <QueryClientProvider client={query}>
      <StrictMode>
        <Routes>
          <Route path='/' element={<App />} />
        </Routes>
      </StrictMode>
    </QueryClientProvider>
  </BrowserRouter>
);
