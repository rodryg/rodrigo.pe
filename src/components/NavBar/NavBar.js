// src/NavBar.js
import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo" title="Rodrigo Yrigoyen Gonzales">
        <span className="highlight">rodrigo</span> <br/>yrigoyen <br/>gonzales
      </Link>
      <ul>
        <li><Link to="/#banner">code</Link></li>
        <li><Link to="/#about">soy</Link></li>
        <li><Link to="/#projects">projects</Link></li>
        <li><Link to="/#collaborations">collaborations</Link></li>
        <li><Link to="/#blog">blog</Link></li>
        <li><Link to="/#contact">contact</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;