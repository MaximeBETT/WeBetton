import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './styles/App.css';

// Détecte si on est sur GitHub Pages pour adapter le basename
const isGitHubPages = window.location.hostname.includes('github.io');
const basename = isGitHubPages ? '/WeBetton' : '';

function App() {
  return (
    <HelmetProvider>
      <Router basename={basename}>
        <div className="app">
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
