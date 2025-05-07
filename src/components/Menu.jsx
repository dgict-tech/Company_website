import React, { useState, useEffect } from 'react';
import './Menu.css';
import logo from '../assets/dgict-logo-dark.png'; // Adjust path if needed

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
            <img src={logo} alt="Logo" className="menu-logo" />
            <button className="menu-close" onClick={toggleMenu}>×</button>
          </div>
          <ul className="menu-links">
            <li><a href="#" onClick={toggleMenu}>HOME</a></li>
            <li><a href="#services" onClick={toggleMenu}>SERVICES</a></li>
            <li><a href="#works" onClick={toggleMenu}>WORKS</a></li>
            <li><a href="#about" onClick={toggleMenu}>ABOUT</a></li>
            <li><a href="#contact" onClick={toggleMenu}>CONTACT</a></li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Menu;
