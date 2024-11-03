// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import ProjectList from './components/ProjectList';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ProjectComments from './components/ProjectComments';
import Project from './components/Project';
import './App.css'; // Importer les styles globaux

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <main className="main-content"> {/* Contenu principal avec padding pour éviter d'être masqué par la navbar */}
        <Home />
        <About />
        <ProjectList />
        <Project />
        <ProjectComments />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;
