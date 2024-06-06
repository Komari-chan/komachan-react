// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/pixiv">Pixiv</Link></li>
        <li><Link to="/github">GitHub</Link></li>
        <li><Link to="/features">Features</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
