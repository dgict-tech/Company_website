import React, { useState, useEffect } from 'react';
import './Menu.css';
import logo from '../assets/dgict-logo-dark.png'; // Adjust path if needed
import dgict from '../assets/dgict-logo.png'
import { Link } from 'react-router-dom';

function Menu({ isOpen, toggleMenu }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {isOpen && (
        <div className={`mobile-side-menu ${scrolled ? 'scrolled' : ''}`}>
          <div className="menu-header">
            <img src={dgict} alt="Logo" className="menu-logo" />
            <button className="menu-close" onClick={toggleMenu}>×</button>
          </div>
          <ul className="menu-links">
            <li><Link to="/#" onClick={toggleMenu}>HOME</Link></li>
            <li><Link to="/#services" onClick={toggleMenu}>SERVICES</Link></li>
            <li><Link to="/#works" onClick={toggleMenu}>WORKS</Link></li>
            <li><Link to="/#about" onClick={toggleMenu}>ABOUT</Link></li>
            <li><Link to="/#contact" onClick={toggleMenu}>CONTACT</Link></li>
            <li><Link to="/servicerequest" onClick={toggleMenu}>SERVICE REQUEST</Link></li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Menu;
