// src/NavBar.js
import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <a href="/" className="logo" title="Rodrigo Yrigoyen Gonzales"><span className="highlight">rodrigo</span> <br/>yrigoyen <br/>gonzales</a>
      <ul>
        <li><a href="#banner">code</a></li>
        <li><a href="#about">soy</a></li>
        <li><a href="#projects">projects</a></li>
        <li><a href="#blog">blog</a></li>
        <li><a href="#collaborations">collaborations</a></li>
        <li><a href="#contact">contact</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;