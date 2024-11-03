// App.js
import React from 'react';
// import api from './services/api.js'; // Supprimez ou commentez cette ligne
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import ProjectList from './components/ProjectList';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <ProjectList />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;
