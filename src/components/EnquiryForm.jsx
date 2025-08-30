import React, { useState } from 'react';
import axios from 'axios';

const EnquiryForm = () => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5001/api/enquiry', formData);
      alert("Enquiry submitted successfully!");
      setFormData({
        name: '',
        phone: '',
        email: '',
        interest: 'Group Class',
        time: '',
        message: ''
      });
    } catch (error) {
      console.error('Failed to submit enquiry:', error);
      // Optionally, show an error message to the user
    }
  };

  return (
    <section className="container" id="enquiry">
      <h2>Enquiry Form</h2>
      <div className="card">

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
              <option value="Membership">Membership </option>
              <option value="Body Building">Body Building</option>
              <option value="Personal Training">Personal Training</option>
              <option value="Weight Loss">Weight Loss</option>
              <option value="Strength">Strength</option>

            </select>
            <input 
              className="col" 
              style={{gridColumn: 'span 12'}}
              name="time" 
              placeholder="Preferred Time (e.g., 5 AM)"
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
            <button className="btn primary" style={{color:"white"}} type="submit" onClick={handleChange}>Enquire Now</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EnquiryForm; 