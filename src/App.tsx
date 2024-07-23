import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TercerosPage from './pages/Terceros';
import Colores from './pages/Recursos/Colores';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();
const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terceros" element={<TercerosPage />} />
        <Route path="/recursos/colores" element={<Colores />} />
      </Routes>
    </QueryClientProvider>
  );
};

export default App;
