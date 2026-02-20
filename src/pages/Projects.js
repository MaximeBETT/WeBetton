import React from 'react';
import { Helmet } from 'react-helmet-async';
import '../styles/Projects.css';
import imgPlanhora from '../assets/Planhora-Logo-768x427.png';
import imgBudgetMariage from '../assets/Budget-mariage.png';

// Cette liste de projets est un exemple, vous pourrez la modifier manuellement
const projectsData = [
  {
    id: 1,
    title: "Planhora",
    description: "Site de planification d'activités pour les entreprises et les particuliers. Application web complète avec gestion de planning et réservation.",
    technologies: ["JavaScript", "PHP", "MySQL"],
    image: imgPlanhora,
    link: "#"
  },
  {
    id: 2,
    title: "Budget Mariage",
    description: "Outil de gestion de budget et création de plan de table pour les mariages. Interface intuitive pour organiser votre événement.",
    technologies: ["JavaScript", "PHP", "MySQL"],
    image: imgBudgetMariage,
    link: "#"
  },
  {
    id: 3,
    title: "Site vitrine restaurant",
    description: "Site web vitrine avec présentation des menus, galerie photo et système de réservation en ligne pour un restaurant lyonnais.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
    image: "https://via.placeholder.com/600x400?text=Restaurant",
    link: "#"
  }
];

const Projects = () => {
  // Structured Data pour les projets
  const projectsJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Projets et Réalisations Web - WeBetton",
    "description": "Portfolio de réalisations web : sites vitrines, applications web, outils en ligne. Développeur freelance à Lyon.",
    "url": "https://webetton.fr/projects",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": projectsData.map((project, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": project.title,
        "description": project.description
      }))
    }
  };

  return (
    <div className="projects">
      <Helmet>
        <title>Projets & Réalisations Web | WeBetton - Développeur Freelance Lyon</title>
        <meta name="description" content="Découvrez mes réalisations web : sites vitrines, applications web, outils en ligne. Développeur web freelance à Lyon spécialisé React, PHP, JavaScript." />
        <meta name="keywords" content="portfolio développeur web, réalisations web lyon, projets react, projets php, site vitrine lyon, application web lyon" />
        <link rel="canonical" href="https://webetton.fr/projects" />
        <meta property="og:title" content="Projets & Réalisations Web | WeBetton" />
        <meta property="og:description" content="Portfolio de réalisations web : sites vitrines, applications en React, PHP, JavaScript." />
        <meta property="og:url" content="https://webetton.fr/projects" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(projectsJsonLd)}</script>
      </Helmet>

      <h1>Mes Projets & Réalisations Web</h1>
      <p className="projects-intro">
        Découvrez une sélection de <strong>projets web</strong> que j'ai réalisés en tant que 
        <strong> développeur freelance à Lyon</strong>. Chaque projet est unique 
        et répond à des besoins spécifiques avec des solutions sur mesure.
      </p>
      
      <div className="projects-grid">
        {projectsData.map(project => (
          <article className="project-card" key={project.id}>
            <div className="project-image">
              <img 
                src={project.image} 
                alt={`${project.title} - Projet web réalisé par WeBetton, développeur freelance Lyon`}
                loading="lazy"
                width="600"
                height="400"
              />
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech" aria-label={`Technologies utilisées : ${project.technologies.join(', ')}`}>
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <a href={project.link} className="btn" target="_blank" rel="noopener noreferrer" aria-label={`Voir le projet ${project.title}`}>
                Voir le projet
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Projects;
