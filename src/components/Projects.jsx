import React from 'react';

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="heading"><span>Projects</span></h2>
      <div className="project-container">
        <div className="project-box"><h3>AI-Powered Student Feedback Analyzer</h3><p>An AI-based app to classify feedback from students as Positive, Neutral, or Negative.</p></div>
        <div className="project-box"><h3>Bus Reservation Management System</h3><p>Designed a ReactJS-based user interface that allows passengers to log in, view available buses, and
                    reserve seats seamlessly.</p></div>
        <div className="project-box"><h3>Smart Emergency Traffic Management</h3><p>Developed an iot-related project where the traffic system is used or manipulated in
                    emergency situations by the location of the ambulance vehicles.</p></div>
      </div>
    </section>
  );
};

export default Projects;
