import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>WeBetton</h1>
          <h2>Développement web personnalisé</h2>
          <p>Solutions sur mesure pour vos projets web avec des technologies modernes</p>
          <div className="hero-buttons">
            <Link to="/projects" className="btn">Voir mes projets</Link>
            <Link to="/contact" className="btn btn-outline">Me contacter</Link>
          </div>
        </div>
      </section>

      <section className="section skills">
        <h2>Expertise technique</h2>
        <div className="skills-container">
          <div className="skill-card">
            <h3>Front-end</h3>
            <p>HTML, CSS, JavaScript, React</p>
          </div>
          <div className="skill-card">
            <h3>Back-end</h3>
            <p>PHP, MySQL</p>
          </div>
          <div className="skill-card">
            <h3>Design</h3>
            <p>Responsive, UX/UI, Design moderne</p>
          </div>
        </div>
      </section>

      <section className="section about">
        <h2>À propos de WeBetton</h2>
        <p>
          Je suis un développeur web indépendant passionné par la création de sites web 
          performants et attrayants. Mon objectif est de fournir des solutions de qualité
          qui répondent parfaitement aux besoins de mes clients.
        </p>
        <p>
          Grâce à mon expertise en PHP, HTML, CSS, JavaScript et particulièrement en React,
          je peux vous accompagner dans la réalisation de tous vos projets web, 
          des sites vitrines aux applications web plus complexes.
        </p>
      </section>
    </div>
  );
};

export default Home;
