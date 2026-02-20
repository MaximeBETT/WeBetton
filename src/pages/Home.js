import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <Helmet>
        <title>WeBetton | Développeur Web Freelance à Lyon - Sites & Applications React</title>
        <meta name="description" content="WeBetton - Développeur web freelance à Lyon. Création de sites internet sur mesure, applications web en React, PHP, JavaScript. Devis gratuit pour votre projet web." />
        <meta name="keywords" content="développeur web lyon, création site internet lyon, freelance web lyon, développeur react, développeur php, site vitrine, application web" />
        <link rel="canonical" href="https://webetton.fr/" />
        <meta property="og:title" content="WeBetton | Développeur Web Freelance à Lyon" />
        <meta property="og:description" content="Création de sites internet sur mesure et applications web en React, PHP, JavaScript. Développeur web freelance basé à Lyon." />
        <meta property="og:url" content="https://webetton.fr/" />
        <meta property="og:type" content="website" />
      </Helmet>

      <section className="hero" aria-label="Présentation de WeBetton">
        <div className="hero-content">
          <h1>WeBetton — Développeur Web Freelance à Lyon</h1>
          <h2>Création de sites internet & applications web sur mesure</h2>
          <p>
            Développeur web indépendant basé à Lyon, je conçois des solutions web performantes 
            et modernes adaptées à vos besoins : sites vitrines, applications React, développement PHP.
          </p>
          <div className="hero-buttons">
            <Link to="/projects" className="btn" aria-label="Découvrir mes réalisations web">Voir mes projets</Link>
            <Link to="/contact" className="btn btn-outline" aria-label="Me contacter pour un devis gratuit">Me contacter</Link>
          </div>
        </div>
      </section>

      <section className="section skills" aria-label="Compétences techniques">
        <h2>Expertise technique</h2>
        <div className="skills-container">
          <article className="skill-card">
            <h3>Front-end</h3>
            <p>HTML5, CSS3, JavaScript ES6+, React.js</p>
          </article>
          <article className="skill-card">
            <h3>Back-end</h3>
            <p>PHP, MySQL, API REST</p>
          </article>
          <article className="skill-card">
            <h3>Design & Performance</h3>
            <p>Responsive Design, UX/UI, Optimisation SEO, Performance Web</p>
          </article>
        </div>
      </section>

      <section className="section about" aria-label="À propos de WeBetton">
        <h2>À propos de WeBetton</h2>
        <p>
          Je suis <strong>développeur web freelance basé à Lyon</strong>, passionné par la création 
          de sites web performants et attrayants. Mon objectif est de fournir des 
          <strong>solutions web de qualité professionnelle</strong> qui répondent parfaitement 
          aux besoins de mes clients.
        </p>
        <p>
          Grâce à mon expertise en <strong>PHP, HTML, CSS, JavaScript</strong> et particulièrement 
          en <strong>React</strong>, je vous accompagne dans la réalisation de tous vos projets web, 
          des <strong>sites vitrines</strong> aux <strong>applications web</strong> plus complexes. 
          Je propose un <strong>devis gratuit</strong> et un suivi personnalisé pour chaque projet.
        </p>
      </section>
    </div>
  );
};

export default Home;
