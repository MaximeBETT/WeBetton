import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-container">
        <div className="footer-info">
          <p className="footer-brand"><strong>WeBetton</strong> — Développeur Web Freelance à Lyon</p>
          <p>&copy; {currentYear} WeBetton. Tous droits réservés.</p>
        </div>
        <nav className="footer-nav" aria-label="Navigation du pied de page">
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/projects">Projets</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <div className="footer-links">
          <a href="https://github.com/webetton" target="_blank" rel="noopener noreferrer" aria-label="Profil GitHub de WeBetton">GitHub</a>
          <a href="mailto:maxime@webetton.fr" aria-label="Envoyer un email à WeBetton">maxime@webetton.fr</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
