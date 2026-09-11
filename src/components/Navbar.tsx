import { useState } from "react";
import logoImg from "../assets/logo-text.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
        <a href="#" className="logo">
          <img src={logoImg} alt="Dev Stack Logo" className="logo-image" />
        </a>

        <div
          className={`nav-links ${
            menuOpen ? "nav-open" : ""
          }`}
        >
          <a href="#home">Home</a>
          <a href="#technologies">Technologies</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="auth-buttons">
          <a href="#">Sign In</a>
          <button>Sign Up</button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
