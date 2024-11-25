// src/NavBar.js
import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#banner">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#collaborations">Collaborations</a></li>
        <li><a href="#blog">Blog</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;