import React, { useState } from 'react';
import { Link } from 'react-scroll'; // Assurez-vous d'installer react-scroll

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // État pour gérer l'ouverture/fermeture

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Inverse l'état de la sidebar
  };

  return (
    <>
      {/* Bouton pour ouvrir/fermer la sidebar sur les petits écrans */}
      <button
        className="fixed top-4 left-4 z-40 p-2 text-gray-700 bg-white shadow-md lg:hidden"
        onClick={toggleSidebar}
        aria-label="Toggle sidebar"
      >
        {isOpen ? '✖' : '☰'} {/* Affiche un symbole différent selon l'état */}
      </button>

      <aside
        className={`fixed top-0 left-0 z-30 h-full w-64 bg-white shadow-lg transition-transform transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        <div className="flex flex-col items-center p-4">
          <h1 className="text-2xl font-bold mb-4">MattiDev</h1>
          <nav className="flex flex-col w-full">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="mb-3 text-lg font-medium text-gray-700 hover:text-blue-500 transition-colors"
              onClick={() => setIsOpen(false)} // Ferme la sidebar après la sélection
            >
              Accueil
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="mb-3 text-lg font-medium text-gray-700 hover:text-blue-500 transition-colors"
              onClick={() => setIsOpen(false)} // Ferme la sidebar après la sélection
            >
              À Propos
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="mb-3 text-lg font-medium text-gray-700 hover:text-blue-500 transition-colors"
              onClick={() => setIsOpen(false)} // Ferme la sidebar après la sélection
            >
              Projets
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="mb-3 text-lg font-medium text-gray-700 hover:text-blue-500 transition-colors"
              onClick={() => setIsOpen(false)} // Ferme la sidebar après la sélection
            >
              Contact
            </Link>
            {/* Lien pour télécharger le CV */}
            <a
              href="/JC-CV.pdf" // Lien vers le CV dans le dossier public
              download
              className="mt-4 text-lg font-medium text-gray-700 hover:text-blue-500 transition-colors"
              onClick={() => setIsOpen(false)} // Ferme la sidebar après le téléchargement
            >
              Télécharger mon CV
            </a>
          </nav>
        </div>
      </aside>

      {/* Couverture sombre pour l'arrière-plan lorsque la sidebar est ouverte */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-20 lg:hidden"
          onClick={() => setIsOpen(false)} // Ferme la sidebar en cliquant en dehors
        />
      )}
    </>
  );
};

export default Sidebar;
