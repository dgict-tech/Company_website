// Menu.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Menu.css';

function Menu() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Hamburger icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <span />
        <span />
        <span />
      </div>

      {/* Classy mobile menu */}
      {isOpen && (
        <div className="mobile-menu-overlay">
          <ul>
            <li>
              <Link to="/" onClick={toggleMenu} className={location.pathname === '/' ? 'active' : ''}>
                HOME
              </Link>
            </li>
            <li>
              <Link to="/services" onClick={toggleMenu} className={location.pathname === '/services' ? 'active' : ''}>
                SERVICES
              </Link>
            </li>
            <li>
              <Link to="/works" onClick={toggleMenu} className={location.pathname === '/works' ? 'active' : ''}>
                WORKS
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleMenu} className={location.pathname === '/about' ? 'active' : ''}>
                ABOUT
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleMenu} className={location.pathname === '/contact' ? 'active' : ''}>
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Menu;
