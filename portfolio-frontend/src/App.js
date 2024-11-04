import React, { useState } from 'react';
import Home from './components/Home';
import About from './components/About';
import ProjectList from './components/ProjectList';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ProjectComments from './components/ProjectComments';
import Project from './components/Project';
import Sidebar from './components/Sidebar'; // Sidebar avec comportement responsive
import './App.css'; // Styles globaux

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="App flex flex-col lg:flex-row">
      {/* Bouton Hamburger pour ouvrir/fermer la sidebar */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 text-gray-800 lg:hidden"
      >
        {isSidebarOpen ? (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        )}
      </button>

      {/* Sidebar avec comportement responsive */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Contenu principal */}
      <div className={`flex-1 transition-all ${isSidebarOpen ? 'ml-64' : 'ml-0'} lg:ml-64`}>
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
