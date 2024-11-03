// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">MattiDev</div>
        <div className="navbar-links">
          <a href="#home">Accueil</a>
          <a href="#about">À Propos</a>
          <a href="#projects">Projets</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
