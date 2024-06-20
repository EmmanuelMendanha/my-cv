import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ProfilPic from "../assets/medias/profil.png";

const fullName = "Emmanuel Mendanha";
const userDescription = "En reconversion professionnelle pour devenir développeur Full-Stack";

const socialLinks = [
  {
    href: "https://github.com/EmmanuelMendanha",
    className: "github",
    icon: <FaGithub />,
  },
  {
    href: "https://www.linkedin.com/in/emmanuel-mendanha/",
    className: "linkedin",
    icon: <FaLinkedin />,
  },
];

const Home = () => {
  return (
    <>
      <section id="home">
        <img src={ProfilPic} alt="profil" className="profile-pic" />
        <div className="container">
          <h1>{fullName}</h1>
          <p>{userDescription}</p>
          <div className="social-links">
            {socialLinks.map((link, index) => (
              <a key={index} href={link.href} className={link.className}>
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;