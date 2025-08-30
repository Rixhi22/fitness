import React from 'react';

const Hero = () => {
  return (
    <section className="hero container" id="top" style={{width: '100%',height: '100%',backgroundSize: 'cover'}}>
      <h1>WHERE HUSTLE MEETS MUSCLE</h1>
      <p><br/>Elite Machines » Elite Physique<br/>Pro Trainers » Transform » Build Legends</p>
      <div className="hero-cta">
        <a className="btn primary" href="#enquiry">Enquire Now</a>
        <a className="btn" href="#packages">View Packages</a>
        <a className="btn" href="#contact">Visit Us</a>
      </div>
    </section>
  );
};

export default Hero;  