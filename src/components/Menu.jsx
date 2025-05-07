import React, { useState, useEffect } from 'react';
import './Menu.css';

function Menu({ isOpen, toggleMenu }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Classy mobile menu */}
      {isOpen && (
        <div className={`mobile-menu-overlay ${scrolled ? 'scrolled' : ''}`}>
          <ul>
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
