import React from 'react';

const Gallery = () => {
  return (
    <section className="container" id="gallery">
      <h2>Photo Gallery</h2>
      <div className="gallery">
        <div className="ph">      <img 
  src="logo.PNG" 
  alt="Company Logo" 
  style={{ width: "100px", height: "auto" }} 
/></div>
        <div className="ph">      <img 
  src="logo.PNG" 
  alt="Company Logo" 
  style={{ width: "100px", height: "auto" }} 
/></div>
        <div className="ph">      <img 
  src="logo.PNG" 
  alt="Company Logo" 
  style={{ width: "100px", height: "auto" }} 
/></div>
        <div className="ph">      <img 
  src="logo.PNG" 
  alt="Company Logo" 
  style={{ width: "100px", height: "auto" }} 
/></div>
        <div className="ph">      <img 
  src="logo.PNG" 
  alt="Company Logo" 
  style={{ width: "100px", height: "auto" }} 
/></div>
        <div className="ph"></div>
      </div>
      <p style={{color:'var(--muted)',marginTop:'20px'}}></p>
    </section>
  );
};

export default Gallery; 