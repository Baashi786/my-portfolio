import React, { useRef, useEffect } from 'react';
import pic from '../assets/pic.jpg';
import Typed from "typed.js";

const Home = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ["Student", "Frontend Developer"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed.destroy(); // Cleanup on unmount
    };
  }, []);

  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hello, It's me</h3>
        <h1>Mohammed Bhashith</h1>
        <h3>And I'm a <span className="multiple-text" ref={typedElement}></span></h3>

        <div className="social-media">
          <a href="https://www.linkedin.com/in/mohammed-bhashith-328969274" target="_blank" rel="noreferrer" style={{ "--i": 7 }}>
  <i className='bx bxl-linkedin'></i>
</a>
          <a href="https://www.instagram.com/_.bachi._07" target="_blank" rel="noreferrer" style={{ "--i": 8 }}><i className='bx bxl-instagram'></i></a>
          <a href="https://wa.me/9731093787" target="_blank" rel="noreferrer" style={{ "--i": 9 }}><i className='bx bxl-whatsapp'></i></a>
        </div>

        <a href="Resume.pdf" download className="btn">Download CV</a>
      </div>

      <div className="home-img">
        <img src={pic} width="400" height="400" alt="My Pic" />
      </div>
    </section>
  );
};

export default Home;
