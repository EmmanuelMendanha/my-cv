import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ProfilPic from "../../public/medias/profil.png";

const Home = () => {
  return (
    <>
      <section id="home">
        <img src={ProfilPic} alt="profil" className="profile-pic" />
        <div className="container">
          <h1>Emmanuel Mendanha</h1>
          <p>En reconversion professionnelle pour devenir développeur Full-Stack</p>
          <div className="social-links">
            <a href="https://github.com/EmmanuelMendanha" className="github">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/emmanuel-mendanha/" className="linkedin">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;