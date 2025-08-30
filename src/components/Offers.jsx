import React from 'react';

const Offers = () => {
  return (
    <section className="container" id="offers">
      <h2>Special Offers</h2>
      <div className="grid">
        <div className="card" style={{gridColumn: 'span 12'}}>
          <h3>Women's Exclusive Offer</h3>
          <ul>
            <li>FREE Diet Plan Consultation (once every 2 months)</li>
            <li>Buddy Pass - Bring a female friend for 1 week free (once every 3 months)</li>
          </ul>
          <a className="btn primary" href="#enquiry">Claim Offer</a>
        </div>
        <div className="card" style={{gridColumn: 'span 12'}}>
          <h3>Gym Opening Offers</h3>
          <p>For students below 20 years</p>
          <ul>
            <li>3 Months (₹3,500) - Get +1 Extra Month Free</li>
            <li>6 Months (₹6,000) - Get +1 Extra Month Free + 1 Month Personal Training Free</li>
            <li>1 Year (₹10,000) - Get +1 Extra Month Free + 1 Month Personal Training Free</li>
          </ul>
          <a className="btn primary" href="#enquiry">Claim Offer</a>
        </div>
        <div className="card" style={{gridColumn: 'span 12'}}>
          <h3>Corporate Offer</h3>
          <p>Join 4 and add 1 person free</p>
          <a className="btn primary" href="#enquiry">Enquire Now</a>
        </div>
        {/* <div className="card payment-container" style={{gridColumn: 'span 12'}}>
          <h3>Payment Methods</h3>
          <p>We accept:</p>
          <div className="payment-methods">
            <div className="payment-method">Cash</div>
            <div className="payment-method">UPI</div>
          </div>
          <a className="btn" href="#enquiry" style={{marginTop: '16px'}}>More Info</a>
        </div> */}
      </div>
    </section>
  );
};

export default Offers; 