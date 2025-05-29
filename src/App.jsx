import React, { useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Certifications from "./components/Certifications.jsx";
import Contact from "./components/Contact.jsx";

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  // ✅ AOS INIT
  useEffect(() => {
    AOS.init();
  }, []);

  // ✅ Animate on scroll logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect(); // Cleanup
  }, []);

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
    </>
  );
}

export default App;
