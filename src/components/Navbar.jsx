import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
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
            <Link to="/#home">HOME</Link>
          </li>
          <li>
            <Link to="/#services">SERVICES</Link>
          </li>
          <li>
            <Link to="/#works">WORKS</Link>
          </li>
          <li>
            <Link to="/#about">ABOUT</Link>
          </li>
          <li>
            <Link to="/#contact">CONTACT</Link>
          </li>
          <li className="whitespace-nowrap">
            <Link to="/servicerequest">SERVICE REQUEST</Link>
          </li>
        </ul>
        <Link to="/servicerequest" className="cta-button">
          GET STARTED
        </Link>
        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </div>
      </div>
      <Menu isOpen={menuOpen} toggleMenu={toggleMenu} />
    </div>
  )
}

export default Navbar