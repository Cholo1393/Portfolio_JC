import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-red-600 text-white py-6">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
      
      <p className="text-center md:text-left text-sm md:text-base">
        © 2024 Jean-Christophe Matti. Tous droits réservés.
      </p>

      {/* Liens de réseaux sociaux */}
      <div className="flex space-x-4 mt-4 md:mt-0">
        <a
          href="https://www.linkedin.com/in/jean-christophe-matti"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition-colors duration-300"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://github.com/Cholo1393"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition-colors duration-300"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="mailto:jc.matti20@gmail.com"
          className="hover:text-gray-300 transition-colors duration-300"
        >
          <FaEnvelope size={24} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
