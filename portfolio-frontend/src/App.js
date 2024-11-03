// App.js
import React from 'react';
import api from './services/api.js';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import ProjectList from './components/ProjectList'; // Assurez-vous que le chemin est correct
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <ProjectList /> {/* Utiliser ProjectList ici */}
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;
