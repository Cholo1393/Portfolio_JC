import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => (
  <nav className="navbar">
    <ul className="navbar-links">
      <li><Link to="home" smooth={true}>Home</Link></li>
      <li><Link to="about" smooth={true}>About</Link></li>
      <li><Link to="projects" smooth={true}>Projects</Link></li>
      <li><Link to="contact" smooth={true}>Contact</Link></li>
    </ul>
  </nav>
);

export default Navbar;
