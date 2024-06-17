import React, { useState } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaPhp, FaSymfony, FaReact } from "react-icons/fa";
import { SiAdonisjs } from "react-icons/si";

const Competences = () => {
  const [skills] = useState([
    { name: "HTML", icon: <FaHtml5 className="icon" /> },
    { name: "CSS", icon: <FaCss3Alt className="icon" /> },
    { name: "JavaScript", icon: <FaJs className="icon" /> },
    { name: "PHP", icon: <FaPhp className="icon" /> },
    { name: "Symfony", icon: <FaSymfony className="icon" /> },
    { name: "AdonisJs", icon: <SiAdonisjs className="icon" /> },
    { name: "React", icon: <FaReact className="icon" /> },
  ]);

  const experiences = [
    {
      title: "Stage chez Second-Step",
      description: "Développement d'une application web avec React.",
    },
    {
      title: "Formation Prep'avenir",
      description: "Formation de 6 mois pour devenir développeur Full-Stack.",
    },
  ];

  const otherSkills = [
    "Portugais: maternelle",
    "Anglais professionnel",
    "Autonome",
    "Ponctuel",
  ];

  const hobbies = [
    "Mangas",
    "Jeux vidéos",
  ];

  return (
    <section id="competences" className="section">
      <div className="container">
        <h2>Mes Compétences</h2>
        <div className="skills">
          {skills.map((skill, index) => (
            <div className="skill" key={index}>
              {skill.icon}
              <h3>{skill.name}</h3>
            </div>
          ))}
        </div>
        <div className="experiences">
          <h2>Mes Expériences</h2>
          {experiences.map((exp, index) => (
            <div className="experience" key={index}>
              <h3>{exp.title}</h3>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
        <div className="other-skills">
          <h2>Autres Compétences</h2>
          <ul>
            {otherSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="hobbies">
          <h2>Hobbies</h2>
          <ul>
            {hobbies.map((hobby, index) => (
              <li key={index}>{hobby}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Competences;