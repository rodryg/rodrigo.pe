import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import ProjectPage from './components/ProjectPage/ProjectPage';
import NavBar from './components/NavBar/NavBar';
import Contact from './components/Contact/Contact';
import './App.css';

function App() {
  useEffect(() => {
    let ticking = false;

    const updateStyles = () => {
      const scrollValue = Math.max(0, window.scrollY);
      const emInPixels = parseFloat(getComputedStyle(document.body).fontSize); // Obtiene el valor de 1em en píxeles
      const incrementStart = 0 + scrollValue / emInPixels; // Incrementa en em según el desplazamiento
      const incrementEnd = 0 + scrollValue / emInPixels; // Incrementa en em según el desplazamiento
      document.body.style.setProperty('--start', `${incrementStart}em`);
      document.body.style.setProperty('--end', `${incrementEnd}em`);
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateStyles();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('load', updateStyles);
    window.addEventListener('popstate', updateStyles);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('load', updateStyles);
      window.removeEventListener('popstate', updateStyles);
    };
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:id" element={<ProjectPage />} />
      </Routes>
      <Contact />
    </div>
  );
}

export default App;
