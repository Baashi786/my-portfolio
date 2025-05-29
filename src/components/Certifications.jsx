import React from 'react';

const Certifications = () => {
  return (
    <section className="certifications" id="certifications">
      <h2 className="heading">My <span>Certifications</span></h2>
      <div className="certification-container">
        <div className="certificate-card">
          <img src="https://img.icons8.com/color/96/certificate.png" alt="Certificate" />
          <h3>Sales and Distribution Management</h3><p>NPTEL-SWAYAM</p>
        </div>
        <div className="certificate-card">
          <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-course-university-flaticons-lineal-color-flat-icons.png" alt="Course" />
          <h3>Large Applications Practicum</h3><p>NPTEL-SWAYAM</p>
        </div>
        <div className="certificate-card">
          <img src="https://img.icons8.com/color/64/network-card.png" alt="Network" />
          <h3>CCNA 1: Introduction to Networks</h3><p>Cisco</p>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
