import { Routes, Route } from 'react-router-dom';
import Colores from '@ui/recursos/pages/Colores';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
/* import Empresas from './pages/Administracion/Empresas'; */
import Iniciar from '@ui/auth/pages/LogIn';
import AdministracionPage from '@ui/administracion/pages/AdministracionPage';
import V2TercerosPage from '@ui/administracion/terceros/pages/TercerosPage';
import V2CrearTercerosPage from '@ui/administracion/terceros/pages/CrearTercero';
import TerceroPage from '@ui/administracion/terceros/pages/TerceroPage';
import EditarTerceroPage from '@ui/administracion/terceros/pages/TerceroPage';

const queryClient = new QueryClient();
const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path='/administracion/terceros' element={<V2TercerosPage />} />
        <Route path="/administracion" element={<AdministracionPage />} />
        <Route path="/administracion/terceros/:nit" element={<TerceroPage/>} />
        <Route path="/administracion/terceros/:nit/editar" element={<EditarTerceroPage />} />
        <Route path="/administracion/terceros/crear" element={<V2CrearTercerosPage />} />
        <Route path="/recursos/colores" element={<Colores />} />
        <Route path="/iniciar" element={<Iniciar />} />
      </Routes>
    </QueryClientProvider>
  );
};

export default App;
