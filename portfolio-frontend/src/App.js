import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import ProjectList from './components/ProjectList';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ProjectComments from './components/ProjectComments';
import Project from './components/Project';
import Sidebar from './components/Sidebar'; // Importer la sidebar
import './App.css'; // Importer les styles globaux

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="App flex flex-col lg:flex-row">
      {/* Sidebar avec comportement responsive */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      
      {/* Contenu principal */}
      <div className={`flex-1 transition-all ${isSidebarOpen ? 'ml-64' : 'ml-0'} lg:ml-64`}>
        {/* Navbar avec bouton pour ouvrir/fermer la sidebar en mobile */}
        <Navbar toggleSidebar={toggleSidebar} />
        
        <main className="main-content p-4">
          <section id="home"><Home /></section>
          <section id="about" className="mt-8"><About /></section>
          <section id="projects" className="mt-8"><ProjectList /><Project /></section>
          <section id="contact" className="mt-8"><ContactForm /></section>
          <section id="comments" className="mt-8"><ProjectComments /></section>
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default App;
