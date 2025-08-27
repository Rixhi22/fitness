import React, { useState } from 'react';

const EnquiryForm = ({ onSuccess, isAuthenticated = false, onRequireLogin }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    interest: 'Group Class',
    time: '',
    message: ''
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

    if (!isAuthenticated) {
      if (onRequireLogin) onRequireLogin();
      return;
    }
    
    // In a real implementation, you would send this data to a server
    console.log('Enquiry form submitted:', formData);
    
    // Call the success callback
    onSuccess();
    
    // Reset the form
    setFormData({
      name: '',
      phone: '',
      email: '',
      interest: 'Group Class',
      time: '',
      message: ''
    });
  };

  return (
    <section className="container" id="enquiry">
      <h2>Enquiry Form</h2>
      <div className="card">
        {!isAuthenticated && (
          <div className="card" style={{marginBottom:16, background:'#151519'}}>
            <p style={{marginBottom:12}}>Please login to submit an enquiry.</p>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="grid" style={{gridTemplateColumns:'repeat(12,1fr)', gap:'20px'}}>
            <input 
              className="col" 
              style={{gridColumn: 'span 12'}}
              name="name" 
              placeholder="Full Name" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
            <input 
              className="col" 
              style={{gridColumn: 'span 12'}}
              name="phone" 
              placeholder="Phone" 
              pattern="[0-9]{10}" 
              value={formData.phone}
              onChange={handleChange}
              required 
            />
            <input 
              className="col" 
              style={{gridColumn: 'span 12'}}
              name="email" 
              type="email" 
              placeholder="Email (optional)"
              value={formData.email}
              onChange={handleChange}
            />
            <select 
              className="col" 
              style={{gridColumn: 'span 12'}}
              name="interest"
              value={formData.interest}
              onChange={handleChange}
            >
              <option value="Group Class">Group Class</option>
              <option value="Personal Training">Personal Training</option>
              <option value="Weight Loss">Weight Loss</option>
              <option value="Strength">Strength</option>
            </select>
            <input 
              className="col" 
              style={{gridColumn: 'span 12'}}
              name="time" 
              placeholder="Preferred Time (e.g., 6 AM)"
              value={formData.time}
              onChange={handleChange}
            />
            <textarea 
              className="col" 
              style={{gridColumn: 'span 12'}}
              name="message" 
              placeholder="Tell us your goal"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <div className="inline" style={{justifyContent:'flex-end'}}>
            <button className="btn primary" style={{color:"white"}} type="submit">{isAuthenticated ? 'Submit Enquiry' : 'Login to Enquire'}</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EnquiryForm; 