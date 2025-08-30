import React from 'react';

const Contact = () => {
  return (
    <section className="container" id="contact">
      <h2>Contact Us</h2>
      <div className="grid">
        <div className="card" style={{gridColumn: 'span 12'}}>
          <h3>Visit Our Gym</h3>
          <p>SVN College Opposite, Nagamalai, Pudukkottai, Madurai</p>
          <a className="btn primary" href="https://maps.app.goo.gl/AoPDpjE5u5shzZPg7" target="_blank">Get Directions</a>
        </div>
        <div className="card" style={{gridColumn: 'span 12'}}>
          <h3>Call Us</h3>
          <p>Our team is ready to answer your questions</p>
          <a className="btn primary" href="tel:8610209166">Call: 8610209166</a>
          <a className="btn" href="tel:8248579720">Call: 8248579720</a>
        </div>
      </div>
    </section>
  );
};

export default Contact; 