import React, { useState } from 'react';
import { Link } from 'react-scroll'; // Assurez-vous d'installer react-scroll
import { FaBars, FaTimes } from 'react-icons/fa'; // Assurez-vous d'installer react-icons

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Icone du menu hamburger */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 text-gray-800 lg:hidden"
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 h-full w-64 bg-white shadow-lg transition-transform transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 lg:block`}
      >
        <div className="flex flex-col items-center p-4">
          <h1 className="text-2xl font-bold mb-4">MattiDev</h1>
          <nav className="flex flex-col w-full">
            {['Accueil', 'À Propos', 'Projets', 'Contact'].map((section, index) => (
              <Link
                key={index}
                to={section.toLowerCase()}
                smooth={true}
                duration={500}
                className="mb-3 text-lg font-medium text-gray-700 hover:text-blue-500 transition-colors"
                onClick={() => setIsOpen(false)} // Ferme la sidebar après clic
              >
                {section}
              </Link>
            ))}
            {/* Lien pour télécharger le CV */}
            <a
              href="/JC-CV.pdf"
              download
              className="mt-4 text-lg font-medium text-gray-700 hover:text-blue-500 transition-colors"
            >
              Télécharger mon CV
            </a>
          </nav>
        </div>
      </aside>

      {/* Overlay pour l'écran mobile */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black opacity-50 z-30 lg:hidden"
        ></div>
      )}
    </>
  );
};

export default Sidebar;
