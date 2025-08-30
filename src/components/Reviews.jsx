import React from 'react';

const Reviews = () => {
  return (
    <section className="container" id="reviews">
      <h2>Reviews</h2>
      <div className="reviews">
        <div className="card">
          <div className="stars">★★★★★</div>
          <p>Space reserved for future customer reviews and testimonials.</p>
          <small style={{color:'var(--muted)'}}>— Coming Soon</small>
        </div>
        <div className="card">
          <div className="stars">★★★★★</div>
          <p>Space reserved for future customer reviews and testimonials.</p>
          <small style={{color:'var(--muted)'}}>— Coming Soon</small>
        </div>
        <div className="card">
          <div className="stars">★★★★★</div>
          <p>Space reserved for future customer reviews and testimonials.</p>
          <small style={{color:'var(--muted)'}}>— Coming Soon</small>
        </div>
      </div>
    </section>
  );
};

export default Reviews; 