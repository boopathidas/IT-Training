import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './EnquiryForm.css'; // Custom CSS file

function EnquiryForm() {
  const [formData, setFormData] = useState({
    enquiryDate: '',
    name: '',
    address: '',
    mobile: '',
    email: '',
    qualification: '',
    gender: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting form data:', formData); // Add this line
    axios.post('http://localhost:5000/api/enquiry', formData)
      .then(response => {
        alert('Enquiry submitted successfully');
        navigate('/dashboard');
      })
      .catch(error => {
        console.error('There was an error submitting the enquiry!', error.response); // Log error response
        alert('Failed to submit enquiry. Please try again.');
      });
  }
  

  return (
    <div className="container enquiry-form-container">
      <h2 className="text-center mb-4">Enquiry Form</h2>
      <form onSubmit={handleSubmit} className="needs-validation" noValidate>
        <div className="form-group">
          <label>Enquiry Date</label>
          <input type="date" name="enquiryDate" className="form-control" value={formData.enquiryDate} onChange={handleChange} required />
          <div className="invalid-feedback">Please enter a valid date.</div>
        </div>
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} placeholder="Enter your name" required />
          <div className="invalid-feedback">Please enter your name.</div>
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
          <label>Gender</label>
          <select name="gender" className="form-control" value={formData.gender} onChange={handleChange} required>
            <option value="">Select your gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <div className="invalid-feedback">Please select your gender.</div>
        </div>
        <button type="submit" className="btn btn-primary btn-block mt-4">Submit Enquiry</button>
      </form>
    </div>
  );
}

export default EnquiryForm;
