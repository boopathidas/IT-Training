import React, { useState, useEffect } from 'react';
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

  const [validated, setValidated] = useState(false); // New state for validation

  const navigate = useNavigate();

  // Set default date to today
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setFormData(prevState => ({ ...prevState, enquiryDate: today }));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      console.log('Submitting form data:', formData);
      axios.post('http://localhost:5000/api/enquiry', formData)
        .then(response => {
          alert('Enquiry submitted successfully');
          navigate('/dashboard');
        })
        .catch(error => {
          console.error('There was an error submitting the enquiry!', error.response);
          alert('Failed to submit enquiry. Please try again.');
        });
    }
    setValidated(true); // Show validation feedback
    e.preventDefault();
  };

  return (
    <div className="container enquiry-form-container">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-lg">
            <div className="card-body">
              <h2 className="text-center mb-4">Enquiry Form</h2>
              <form onSubmit={handleSubmit} noValidate className={validated ? 'was-validated' : ''}>
                <div className="form-group mb-3">
                  <label htmlFor="enquiryDate">Enquiry Date</label>
                  <input 
                    type="date" 
                    id="enquiryDate"
                    name="enquiryDate" 
                    className="form-control" 
                    value={formData.enquiryDate} 
                    onChange={handleChange} 
                    required 
                  />
                  <div className="invalid-feedback">Please enter a valid date.</div>
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="name">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name" 
                    className="form-control" 
                    value={formData.name} 
                    onChange={handleChange} 
                    placeholder="Enter your name" 
                    required 
                  />
                  <div className="invalid-feedback">Please enter your name.</div>
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="address">Address</label>
                  <input 
                    type="text" 
                    id="address"
                    name="address" 
                    className="form-control" 
                    value={formData.address} 
                    onChange={handleChange} 
                    placeholder="Enter your address" 
                    required 
                  />
                  <div className="invalid-feedback">Please enter your address.</div>
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="mobile">Mobile</label>
                  <input 
                    type="text" 
                    id="mobile"
                    name="mobile" 
                    className="form-control" 
                    value={formData.mobile} 
                    onChange={handleChange} 
                    placeholder="Enter your mobile number" 
                    required 
                  />
                  <div className="invalid-feedback">Please enter a valid mobile number.</div>
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email" 
                    className="form-control" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder="Enter your email" 
                    required 
                  />
                  <div className="invalid-feedback">Please enter a valid email address.</div>
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="qualification">Qualification</label>
                  <input 
                    type="text" 
                    id="qualification"
                    name="qualification" 
                    className="form-control" 
                    value={formData.qualification} 
                    onChange={handleChange} 
                    placeholder="Enter your qualification" 
                    required 
                  />
                  <div className="invalid-feedback">Please enter your qualification.</div>
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="gender">Gender</label>
                  <select 
                    id="gender"
                    name="gender" 
                    className="form-control" 
                    value={formData.gender} 
                    onChange={handleChange} 
                    required
                  >
                    <option value="">Select your gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                  <div className="invalid-feedback">Please select your gender.</div>
                </div>
                <button type="submit" className="btn btn-custom btn-block mt-4">Submit Enquiry</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnquiryForm;
