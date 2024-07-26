import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TercerosPage from './pages/Administracion/Terceros';
import Colores from './pages/Recursos/Colores';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Empresas from './pages/Administracion/Empresas';
import Iniciar from './pages/sesiones/Iniciar';
import AdministracionPage from './pages/Administracion';
import UsuariosPage from './pages/Administracion/Usuarios';
import CrearTercero from './pages/Administracion/Terceros/CrearTercero';
import TerceroIdPage from './pages/Administracion/Terceros/TerceroId';
import EditarTerceroPage from './pages/Administracion/Terceros/EditarTercero';
const queryClient = new QueryClient();
const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/administracion" element={<AdministracionPage />} />
        <Route path="/administracion/terceros" element={<TercerosPage />} />
        <Route path="/administracion/terceros/:nit" element={<TerceroIdPage />} />
        <Route path="/administracion/terceros/:nit/editar" element={<EditarTerceroPage />} />
        <Route path="/administracion/terceros/crear" element={<CrearTercero />} />
        <Route path="/administracion/empresas" element={<Empresas />} />
        <Route path="/administracion/usuarios" element={<UsuariosPage />} />
        <Route path="/recursos/colores" element={<Colores />} />
        <Route path="/iniciar" element={<Iniciar />} />
      </Routes>
    </QueryClientProvider>
  );
};

export default App;
