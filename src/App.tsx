import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TercerosPage from './pages/Administracion/Terceros';
import Colores from './pages/Recursos/Colores';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Empresas from './pages/Empresas';
import Iniciar from './pages/sesiones/Iniciar';
import AdministracionPage from './pages/Administracion';
const queryClient = new QueryClient();
const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* grupo de rutas /administracion */}

        <Route path="/administracion" element={<AdministracionPage />} />
        <Route path="/administracion/terceros" element={<TercerosPage />} />
        <Route path="/empresas" element={<Empresas />} />
        <Route path="/recursos/colores" element={<Colores />} />
        <Route path="/iniciar" element={<Iniciar />} />
      </Routes>
    </QueryClientProvider>
  );
};

export default App;
