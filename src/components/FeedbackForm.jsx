import React, { useState } from 'react';

const FeedbackForm = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    feedback: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // In a real implementation, you would send this data to a server
    console.log('Feedback form submitted:', formData);
    
    // Call the success callback
    onSuccess();
    
    // Reset the form
    setFormData({
      name: '',
      phone: '',
      feedback: ''
    });
  };

  return (
    <section className="container" id="feedback">
      <h2>Send Us Feedback</h2>
      <div className="card">
        <form onSubmit={handleSubmit}>
          <div className="grid" style={{gridTemplateColumns:'repeat(12,1fr)', gap:'20px'}}>
            <input 
              style={{gridColumn: 'span 12'}}
              name="name"
              placeholder="Name" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
            <input 
              style={{gridColumn: 'span 12'}}
              name="phone"
              placeholder="Phone (optional)"
              value={formData.phone}
              onChange={handleChange}
            />
            <textarea 
              style={{gridColumn: 'span 12'}}
              name="feedback"
              placeholder="Your feedback" 
              value={formData.feedback}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="inline" style={{justifyContent:'flex-end'}}>
            <button className="btn primary" type="submit">Send Feedback</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default FeedbackForm; 