// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import ProjectList from './components/ProjectList';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Project from './components/Project'; // Importez le composant Project

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" exact component={ProjectList} />
          <Route path="/projects/:projectId" component={Project} /> {/* Ajoutez cette ligne pour la route du projet */}
          <Route path="/contact" component={ContactForm} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
