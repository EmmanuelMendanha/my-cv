import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/home';
import Navigation from './components/navigation';
import Portfolio from './pages/portfolio';
import Competences from './pages/competences';
import Contact from './pages/contact';
import './styles/index.css';

function App() {
  return (
    <Router>
      <Navigation />
      <Home />
      <Competences />
      <Portfolio />
      <Contact />
    </Router>
  );
}

export default App;
