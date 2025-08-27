import React from 'react';

const Packages = () => {
  return (
    <section className="container" id="packages">
      <h2>Membership Packages</h2>
      <div className="grid">
        <div className="card" >
          <h3>Basic Pack</h3>
          <p>1 Month Membership</p>
          <p><strong>₹1,500</strong></p>
          
        </div>
        <div className="card">
          <h3>3 Months</h3>
          <p>Standard membership</p>
          <p><strong>₹3,500</strong></p>
          
        </div>
        <div className="card">
          <h3>6 Months</h3>
          <p>Extended membership</p>
          <p><strong>₹6,000</strong></p>
          
        </div>
        <div className="card">
          <h3>1 Year</h3>
          <p>Annual membership</p>
          <p><strong>₹10,000</strong></p>
        </div>
        <div className="card">
          <h3>Student Pack</h3>
          <p>Budget friendly for students</p>
          <p><strong>₹1,000/month</strong></p>
        </div>
        <div className="card">
          <h3>Elite Training</h3>
          <p>Customized workout plans</p>
          <p><strong>₹6,000/month</strong></p>
          
        </div>
        
      </div>
      <a className="btn" href="#enquiry" style={{display: "block", margin: "0 auto", textAlign: "center"}}>Enquire</a>
    </section>
  );
};

export default Packages; 