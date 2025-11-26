import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>OFICINA ORTOPÉDICA DE BAGÉ</h1>
      <h4>Secretária Municipal de Saúde</h4>
      <nav>
        <ul>
          <li><Link to="/">Início</Link></li> 
          <li><Link to="/info">Informações</Link></li>
          <li><Link to="/noticias">Notícias</Link></li>
          <li><Link to="/equipe">Equipe</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
