import React, { useState, useEffect } from "react";
import "../style.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close mobile menu on scroll/navigation
  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);
    window.addEventListener("scroll", closeMenu);
    return () => window.removeEventListener("scroll", closeMenu);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false); // close mobile menu
  };

  return (
    <nav className="navbar">
      <div className="logo">Portfolio</div>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        {["home", "about", "skills", "projects", "certifications", "contact"].map((item) => (
          <button key={item} onClick={() => scrollToSection(item)} className="nav-button">
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </button>
        ))}
      </div>

      <div className={`hamburger ${menuOpen ? "active" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
