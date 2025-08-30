import React from 'react';

const Trainers = () => {
  return (
    <section className="container" id="trainers">
      <h2>Our Trainer</h2>
      <div className="trainers">
        <div className="card trainer">
          <div className="avatar" aria-hidden="true"></div>
          <div className="trainer-info">
            <strong>Jeeva</strong>
            <p style={{color:'var(--muted)', margin:'12px 0'}}>Empowering every workout with strength, discipline, and results</p>
            <div className="inline"><a className="btn" href="#enquiry">Enquire</a></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trainers; 