// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-600 text-white shadow-lg py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-2xl font-bold">Mon Portfolio</div>
        <div>
          <a href="#home" className="mx-4 hover:text-pink-400">Accueil</a>
          <a href="#about" className="mx-4 hover:text-pink-400">À Propos</a>
          <a href="#projects" className="mx-4 hover:text-pink-400">Projets</a>
          <a href="#contact" className="mx-4 hover:text-pink-400">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
