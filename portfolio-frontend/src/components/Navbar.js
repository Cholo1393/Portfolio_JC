// Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1 style={{ margin: 0 }}>Mon Portfolio</h1>
      </div>
      <div className="navbar-links">
        <a href="#about">À Propos</a>
        <a href="#projects">Projets</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
