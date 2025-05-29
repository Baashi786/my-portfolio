// src/components/Navbar.jsx

import React from 'react';

const Navbar = () => {
  return (
    <header className="header">
      <a href="#" className="logo">Portfolio</a>
      <nav className="navbar">
        <a href="#home" style={{ ['--i']: 1 }}>Home</a>
        <a href="#about" style={{ ['--i']: 2 }}>About</a>
        <a href="#skills" style={{ ['--i']: 3 }}>Skills</a>
        <a href="#projects" style={{ ['--i']: 4 }}>Projects</a>
        <a href="#certifications" style={{ ['--i']: 5 }}>Certificates</a>
        <a href="#contact" style={{ ['--i']: 6 }}>Contact</a>
      </nav>
    </header>
  );
};

export default Navbar;
