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
const App = () => {
  return (
    <div className="App font-sans bg-gray-100 text-gray-900">
      <Navbar />
      <main className="pt-16"> {/* Ajout d'un padding supérieur pour éviter que le contenu soit masqué par la navbar */}
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
