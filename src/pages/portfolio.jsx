import React, { useState } from "react";

import ProjectSupa from '../assets/medias/supakar.png';
import ProjectBnb from '../assets/medias/bnb.png';
import ProjectCinemax from '../assets/medias/cinemax.png';

const projectsData = [
  {
    id: 1,
    name: "Supakar GTA",
    technology: "React",
    image: ProjectSupa,
    sourceLink: "https://supakar-gta-e-m.vercel.app/",
    description: "Changement de couleur d'une voiture dans le style GTA de façon dynamique.",
  },
  {
    id: 2,
    name: "BnB",
    technology: "Symfony",
    image: ProjectBnb,
    sourceLink: "https://github.com/EmmanuelMendanha/bnb-2402",
    description: "Creation d'un site de location de logement entre particuliers.",
  },
  {
    id: 3,
    name: "Cinemax",
    technology: "React",
    image: ProjectCinemax,
    sourceLink: "https://cinemax-ten.vercel.app/",
    description: "Site de recherche de films et séries avec une API externe.",
  },
  // Ajoutez d'autres projets ici
];

const Portfolio = () => {
  const [projects, setProjects] = useState(projectsData);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="portfolio" className="portfolio">
      <h2>Portfolio</h2>
      <input
        type="text"
        placeholder="Rechercher par nom de projet"
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className="projects">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.name} />
            <h3>{project.name}</h3>
            <p>{project.technology}</p>
            <p>{project.description}</p>
            <a href={project.sourceLink} target="_blank" rel="noopener noreferrer">
              Voir les sources
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;