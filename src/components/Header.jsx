import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <nav>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/liderazgo">Liderazgo</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;