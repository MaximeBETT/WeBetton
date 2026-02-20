import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header" role="banner">
      <div className="header-container">
        <Link to="/" className="logo" aria-label="WeBetton - Retour à l'accueil">
          <span className="logo-text">WeBetton</span>
        </Link>
        
        <button 
          className={`menu-toggle ${menuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          aria-label="Ouvrir le menu de navigation"
          type="button"
        >
          <div className="hamburger"></div>
        </button>

        <nav id="main-navigation" className={`nav-menu ${menuOpen ? 'active' : ''}`} role="navigation" aria-label="Navigation principale">
          <ul>
            <li><Link to="/" onClick={() => setMenuOpen(false)} aria-label="Page d'accueil">Accueil</Link></li>
            <li><Link to="/projects" onClick={() => setMenuOpen(false)} aria-label="Voir mes projets et réalisations">Projets</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)} aria-label="Me contacter pour un devis">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
