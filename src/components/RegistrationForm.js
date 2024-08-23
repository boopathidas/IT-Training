import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './RegistrationForm.css'; // Custom CSS file

function RegistrationForm() {
  const [formData, setFormData] = useState({
    registrationNumber: '',
    dateOfRegistration: '',
    dateOfBirth: '',
    gender: '',
    address: '',
    mobile: '',
    email: '',
    qualification: '',
    totalFees: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/register', formData)
      .then(response => {
        alert('Registration submitted successfully');
      })
      .catch(error => {
        console.error('There was an error submitting the registration!', error);
      });
  };

  return (
    <div className="container registration-form-container">
      <h2 className="text-center mb-4">Registration Form</h2>
      <form onSubmit={handleSubmit} className="needs-validation" noValidate>
        <div className="form-group">
          <label>Registration Number</label>
          <input type="text" name="registrationNumber" className="form-control" value={formData.registrationNumber} onChange={handleChange} placeholder="Enter registration number" required />
          <div className="invalid-feedback">Please enter a registration number.</div>
        </div>
        <div className="form-group">
          <label>Date of Registration</label>
          <input type="date" name="dateOfRegistration" className="form-control" value={formData.dateOfRegistration} onChange={handleChange} required />
          <div className="invalid-feedback">Please select the date of registration.</div>
        </div>
        <div className="form-group">
          <label>Date of Birth</label>
          <input type="date" name="dateOfBirth" className="form-control" value={formData.dateOfBirth} onChange={handleChange} required />
          <div className="invalid-feedback">Please select your date of birth.</div>
        </div>
        <div className="form-group">
          <label>Gender</label>
          <select name="gender" className="form-control" value={formData.gender} onChange={handleChange} required>
            <option value="">Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Address</label>
          <input type="text" name="address" className="form-control" value={formData.address} onChange={handleChange} placeholder="Enter your address" required />
          <div className="invalid-feedback">Please enter your address.</div>
        </div>
        <div className="form-group">
          <label>Mobile</label>
          <input type="text" name="mobile" className="form-control" value={formData.mobile} onChange={handleChange} placeholder="Enter your mobile number" required />
          <div className="invalid-feedback">Please enter a valid mobile number.</div>
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} placeholder="Enter your email" required />
          <div className="invalid-feedback">Please enter a valid email address.</div>
        </div>
        <div className="form-group">
          <label>Qualification</label>
          <input type="text" name="qualification" className="form-control" value={formData.qualification} onChange={handleChange} placeholder="Enter your qualification" required />
          <div className="invalid-feedback">Please enter your qualification.</div>
        </div>
        <div className="form-group">
          <label>Total Fees</label>
          <input type="text" name="totalFees" className="form-control" value={formData.totalFees} onChange={handleChange} placeholder="Enter total fees" required />
          <div className="invalid-feedback">Please enter the total fees.</div>
        </div>
        <button type="submit" className="btn btn-primary btn-block mt-4">Submit Registration</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
