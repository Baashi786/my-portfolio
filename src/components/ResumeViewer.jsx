import React from "react";

const ResumeViewer = () => {
  return (
    <div className="resume-container" style={{ padding: "2rem" }}>
      <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>Interactive Resume Viewer</h2>
      <div style={{ width: "100%", height: "80vh", border: "2px solid #ccc" }}>
        <iframe
          src="/MyResume.pdf"
          title="Resume"
          width="100%"
          height="100%"
          style={{ border: "none" }}
        >
          <p>Your browser does not support iframes or PDF viewing.</p>
        </iframe>
      </div>
    </div>
  );
};

export default ResumeViewer;
