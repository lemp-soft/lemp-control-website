import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TercerosPage from './pages/Terceros';
const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/terceros" element={<TercerosPage />} />
    </Routes>
  );
};

export default App;
