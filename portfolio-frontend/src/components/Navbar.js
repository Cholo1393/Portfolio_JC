import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-scroll';
import '../style.css';

const Navbar = () => {
  // État pour gérer la visibilité de la navbar
  const [nav, setNav] = useState(false);

  // Fonction pour gérer l'affichage de la navbar
  const handleNav = () => {
    setNav(!nav);
  };

  // Tableau contenant les éléments de navigation
  const navItems = [
    { id: 1, text: 'Accueil', to: 'home' },
    { id: 2, text: 'À Propos', to: 'about' },
    { id: 3, text: 'Projets', to: 'projects' },
    { id: 4, text: 'Contact', to: 'contact' },
  ];

  return (
    <div className='bg-[#c20000] flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      {/* Logo */}
      <h1 className='text-3xl font-bold text-[#00df9a]'>MattiDev</h1>

      {/* Navigation de bureau */}
      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 hover:bg-[#00df9a] rounded-xl cursor-pointer duration-300'
          >
            <Link to={item.to} smooth={true} duration={500}>
              {item.text}
            </Link>
          </li>
        ))}
      </ul>

      {/* Icône de navigation mobile */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Menu de navigation mobile */}
      <ul
        className={`fixed left-0 top-0 w-[60%] h-full border-r border-gray-900 bg-[#000300] transition-transform duration-500 ${nav ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {/* Logo mobile */}
        <h1 className='text-3xl font-bold text-[#00df9a] m-4'>MattiDev</h1>

        {/* Éléments de navigation mobile */}
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 border-b border-gray-600 hover:bg-[#00df9a] duration-300 cursor-pointer'
          >
            <Link
              to={item.to}
              smooth={true}
              duration={500}
              onClick={handleNav} // Ferme le menu après la sélection
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>

      {/* Fond semi-transparent pour le menu mobile */}
      <div
        className={`fixed inset-0 bg-black opacity-50 transition-opacity duration-300 ease-in-out ${nav ? 'opacity-50 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={handleNav}
      />
    </div>
  );
};

export default Navbar;
