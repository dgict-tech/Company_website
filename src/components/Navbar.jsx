"use client"

import { useEffect, useState } from "react"
import "./Navbar.css"
import Menu from "./Menu"
import logo from "../assets/dgict-logo-dark.png"
import { MenuIcon, X } from "lucide-react"

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="logo-section">
          <img src={logo || "/placeholder.svg"} alt="DGICT Logo" className="logo" />
        </div>
        <ul className="nav-links">
          <li>
            <a href="#home">HOME</a>
          </li>
          <li>
            <a href="#services">SERVICES</a>
          </li>
          <li>
            <a href="#works">WORKS</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
        <a href="#contact" className="cta-button">
          GET STARTED
        </a>
        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </div>
      </div>
      <Menu isOpen={menuOpen} toggleMenu={toggleMenu} />
    </div>
  )
}

export default Navbar
