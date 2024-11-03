import React from 'react';
import { Link } from 'react-scroll';

const Home = () => (
  <section id="home" className="home-section">
    <h1>Jean-Christophe Matti</h1>
    <p>Web Developer</p>
    <Link to="about" smooth={true} className="btn">En savoir plus</Link>
  </section>
);

export default Home;
