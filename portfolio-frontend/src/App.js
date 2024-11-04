import React from 'react';
import Navbar from './components/Sidebar';
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
  return (
    <div className="App flex">
      <Sidebar />
      <div className="flex-1 ml-64"> {/* Ajuster la marge pour la sidebar */}
        <Navbar />
        <main className="main-content">
          <div id="home"><Home /></div>
          <div id="about"><About /></div>
          <div id="projects"><ProjectList /><Project /></div>
          <div id="contact"><ContactForm /></div>
          <ProjectComments />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
