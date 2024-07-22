import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TercerosPage from './pages/Terceros';
import Colores from './pages/Recursos/Colores';
const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/terceros" element={<TercerosPage />} />
      <Route path="/recursos/colores" element={<Colores />} />
    </Routes>
  );
};

export default App;
