import React from 'react';
import { Link } from 'react-scroll'; // Assurez-vous d'installer react-scroll

const Sidebar = () => {
  return (
    <aside className="fixed top-0 left-0 z-30 h-full w-64 bg-white shadow-lg transition-transform transform translate-x-0 lg:translate-x-0">
      <div className="flex flex-col items-center p-4">
        <h1 className="text-2xl font-bold mb-4">MattiDev</h1>
        <nav className="flex flex-col w-full">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="mb-3 text-lg font-medium text-gray-700 hover:text-blue-500 transition-colors"
          >
            Accueil
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="mb-3 text-lg font-medium text-gray-700 hover:text-blue-500 transition-colors"
          >
            À Propos
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="mb-3 text-lg font-medium text-gray-700 hover:text-blue-500 transition-colors"
          >
            Projets
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="mb-3 text-lg font-medium text-gray-700 hover:text-blue-500 transition-colors"
          >
            Contact
          </Link>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
