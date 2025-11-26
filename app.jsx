import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Info from './pages/info';
import Noticias from './pages/noticias';
import Equipe from './pages/equipe';

import './style.css'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/equipe" element={<Equipe />} />
        <Route path="*" element={<div>404: Página Não Encontrada</div>} /> 
      </Routes>
    </Router>
  );
}

export default App;
