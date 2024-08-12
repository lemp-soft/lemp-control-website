import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Colores from './pages/Recursos/Colores';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Empresas from './pages/Administracion/Empresas';
import Iniciar from './pages/sesiones/Iniciar';
import AdministracionPage from './pages/Administracion';
import UsuariosPage from './pages/Administracion/Usuarios';
import V2TercerosPage from './ui/administracion/terceros/pages/TercerosPage';
import V2CrearTercerosPage from './ui/administracion/terceros/pages/CrearTercero';
import TerceroPage from './ui/administracion/terceros/pages/TerceroPage';
import EditarTerceroPage from '@ui/administracion/terceros/pages/TerceroPage';

const queryClient = new QueryClient();
const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/administracion/terceros' element={<V2TercerosPage />} />
        <Route path="/administracion" element={<AdministracionPage />} />
        <Route path="/administracion/terceros/:nit" element={<TerceroPage/>} />
        <Route path="/administracion/terceros/:nit/editar" element={<EditarTerceroPage />} />
        <Route path="/administracion/terceros/crear" element={<V2CrearTercerosPage />} />
        <Route path="/administracion/empresas" element={<Empresas />} />
        <Route path="/administracion/usuarios" element={<UsuariosPage />} />
        <Route path="/recursos/colores" element={<Colores />} />
        <Route path="/iniciar" element={<Iniciar />} />
      </Routes>
    </QueryClientProvider>
  );
};

export default App;
