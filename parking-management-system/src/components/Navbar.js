// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {

  return (
    <header className="header-container">
      <div className="logo">
        <Link to="/"><img src="https://parkivia.ancorathemes.com/wp-content/uploads/2017/12/logo1.png" alt="Parkivia Logo" /></Link>
      </div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Navbar;
