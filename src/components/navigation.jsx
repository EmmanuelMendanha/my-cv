import React, { useState, useEffect } from 'react';
import { FaHome, FaUser, FaBook, FaEnvelope } from 'react-icons/fa';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');

  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY + window.innerHeight / 2;

    sections.forEach(section => {
      if (scrollPos > section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
        setActiveSection(section.getAttribute('id'));
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav id="navbar" className="navbar nav-menu">
      <ul>
        <li>
          <a href="#home" className={`nav-link scrollto ${activeSection === 'home' ? 'active' : ''}`}>
            <FaHome /><span>Home</span>
          </a>
        </li>
        <li>
          <a href="#competences" className={`nav-link scrollto ${activeSection === 'competences' ? 'active' : ''}`}>
            <FaUser /><span>Competences</span>
          </a>
        </li>
        <li>
          <a href="#portfolio" className={`nav-link scrollto ${activeSection === 'portfolio' ? 'active' : ''}`}>
            <FaBook /><span>Portfolio</span>
          </a>
        </li>
        <li>
          <a href="#contact" className={`nav-link scrollto ${activeSection === 'contact' ? 'active' : ''}`}>
            <FaEnvelope /><span>Contact</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;