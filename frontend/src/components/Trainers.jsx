import React from 'react';

const Trainers = () => {
  return (
    <section className="container" id="trainers">
      <h2>Our Trainer</h2>
      <div className="trainers">
        <div className="card trainer">
          <div className="avatar" aria-hidden="true">
            <img src="trainer.jpg" alt="Company Logo" />
          </div>
          <div className="trainer-info">
            <strong style={{textAlign:"center",color:"b70807"}}>Jeeva</strong>
            <p style={{color:'var(--muted)', margin:'12px 0'}}></p><ul>
            <li>	8+ years of gym and training experience</li>
            <li>	100+ successful client transformations</li>
            {/* <li>	Bodybuilding: Mr. Madurai & Mr. Tamil Nadu</li>
            <li>	Powerlifting: 5× State Gold Medalist & 1× National Medalist</li>
            <li>	Weightlifting: 3× Bharathiar University Gold Medalist & 3× State Champion</li> */}</ul>
            {/* <div className="inline"><a className="btn" href="#enquiry">Enquire</a></div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trainers; 