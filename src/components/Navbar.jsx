import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import for routing
import './Navbar.css';
import Menu from './Menu';

import logo from '../assets/dgict-logo-dark.png';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen); 

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="logo-section">
          <img src={logo} alt="Logo" className="logo jello" />
        </div>
        <ul className="nav-links">
          <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>HOME</Link></li>
          <li><Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>SERVICES</Link></li>
          <li><Link to="/works" className={location.pathname === '/works' ? 'active' : ''}>WORKS</Link></li>
          <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>ABOUT</Link></li>
          <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>CONTACT</Link></li>
        </ul>
      </div>
      <Menu/>
    </div>
  );
}

export default Navbar;
