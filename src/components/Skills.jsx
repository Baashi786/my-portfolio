import React from 'react';

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="heading">My <span>Skills</span></h2>
      <div className="skills-content">
        <div className="skill-card"><i className="fab fa-html5"></i><span>HTML, CSS</span></div>
        <div className="skill-card"><i className="fab fa-react"></i><span>React JS</span></div>
        <div className="skill-card"><i className="devicon-nodejs-plain"></i><span>Node JS</span></div>
        <div className="skill-card"><i className="devicon-python-plain"></i><span>Python</span></div>
        <div className="skill-card"><i className="devicon-java-plain"></i><span>Java</span></div>
        <div className="skill-card"><i className="fas fa-database"></i><span>MongoDB & MySQL</span></div>
        <div className="skill-card"><i className="fas fa-robot"></i><span>Machine Learning</span></div>
      </div>
    </section>
  );
};

export default Skills;
