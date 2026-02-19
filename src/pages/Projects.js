import React from 'react';
import '../styles/Projects.css';
import imgPlanhora from '../assets/Logo-PlanHora-blanc-300x154.png';

// Cette liste de projets est un exemple, vous pourrez la modifier manuellement
const projectsData = [
  {
    id: 1,
    title: "Planhora",
    description: "Site de planification d'activités pour les entreprises et les particuliers",
    technologies: ["JavaScript", "PHP", "MySQL"],
    image: imgPlanhora,
    link: "#"
  },
  {
    id: 2,
    title: "Application de gestion",
    description: "Dashboard pour gérer les stocks et les commandes d'une entreprise",
    technologies: ["React", "PHP", "MySQL"],
    image: "https://via.placeholder.com/600x400?text=Gestion",
    link: "#"
  },
  {
    id: 3,
    title: "Site vitrine restaurant",
    description: "Présentation des menus et réservation en ligne",
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
    image: "https://via.placeholder.com/600x400?text=Restaurant",
    link: "#"
  }
];

const Projects = () => {
  return (
    <div className="projects">
      <h1>Mes projets</h1>
      <p className="projects-intro">
        Découvrez une sélection de projets web que j'ai réalisés. Chaque projet est unique 
        et répond à des besoins spécifiques.
      </p>
      
      <div className="projects-grid">
        {projectsData.map(project => (
          <div className="project-card" key={project.id}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <a href={project.link} className="btn" target="_blank" rel="noopener noreferrer">
                Voir le projet
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
