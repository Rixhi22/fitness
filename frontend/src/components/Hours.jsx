import React from 'react';

const Hours = () => {
  return (
    <section className="container" id="hours">
      <h2>Operating Hours</h2>
      <div className="card">
        <div className="hours">
          <div><strong>Monday - Saturday: <spam style={{ color : "#b70807", fontweight: "bold" }}> 5:00 AM - 10:00 PM</spam></strong></div>
          <div><strong>Sunday: <spam style={{ color : "#b70807", fontweight: "bold" }}>Closed</spam></strong></div>

        </div>
      </div>
    </section>
  );
};

export default Hours; 