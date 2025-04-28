import React, { useState } from 'react';
import '../styles/Apply.css'; // Pastikan path CSS sudah benar

const Apply = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission (you can replace this with actual form handling)
    alert('Application Submitted!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      resume: '',
    });
  };

  return (
    <div className="apply-container">
      <h1>Apply Now</h1>
      <form onSubmit={handleSubmit} className="apply-form">
        <div className="form-group">
          <label htmlFor="name">Full Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="resume">Upload Resume:</label>
          <input
            type="file"
            id="resume"
            name="resume"
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="apply-button">Submit Application</button>
      </form>
    </div>
  );
};

export default Apply;
