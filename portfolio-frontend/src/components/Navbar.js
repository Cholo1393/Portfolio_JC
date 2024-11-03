import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import '../style.css'
const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'Accueil', href: '#home' },
    { id: 2, text: 'À Propos', href: '#about' },
    { id: 3, text: 'Projets', href: '#projects' },
    { id: 4, text: 'Contact', href: '#contact' },
  ];

  return (
    <div className='bg-[#c20000] flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      {/* Logo */}
      <h1 className='text-3xl font-bold text-[#00df9a]'>MattiDev</h1>

      {/* Desktop Navigation */}
      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 hover:bg-[#00df9a] rounded-xl cursor-pointer duration-300'
          >
            <a href={item.href}>{item.text}</a>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={`fixed left-0 top-0 w-[60%] h-full border-r border-gray-900 bg-[#000300] transition-transform duration-500 ${nav ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {/* Mobile Logo */}
        <h1 className='text-3xl font-bold text-[#00df9a] m-4'>MattiDev</h1>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 border-b border-gray-600 hover:bg-[#00df9a] duration-300 cursor-pointer'
          >
            <a href={item.href}>{item.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
