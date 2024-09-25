import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function StudentRecords() {
  const [enquiries, setEnquiries] = useState([]);
  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
    // Fetch enquiry data from the API
    fetch('/api/enquiries')
      .then(response => response.json())
      .then(data => {
        console.log('Enquiries data:', data);  // Debugging log
        setEnquiries(data);
      })
      .catch(error => {
        console.error('There was an error fetching the enquiry data!', error);
      });

    // Fetch registration data from the API
    fetch('/api/registrations')
      .then(response => response.json())
      .then(data => {
        console.log('Registrations data:', data);  // Debugging log
        setRegistrations(data);
      })
      .catch(error => {
        console.error('There was an error fetching the registration data!', error);
      });
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Enquiry Records</h2>
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Enquiry ID</th>
            <th>Enquiry Date</th>
            <th>Name</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Qualification</th>
            <th>Gender</th>
            <th>Address</th>
            <th>Course Interested</th>
          </tr>
        </thead>
        <tbody>
          {enquiries.length > 0 ? (
            enquiries.map(enquiry => (
              <tr key={enquiry.id}>
                <td>{enquiry.enquiryId}</td>
                <td>{enquiry.enquiryDate}</td>
                <td>{enquiry.name}</td>
                <td>{enquiry.mobile}</td>
                <td>{enquiry.email}</td>
                <td>{enquiry.qualification}</td>
                <td>{enquiry.gender}</td>
                <td>{enquiry.address}</td>
                <td>{enquiry.course}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9">No enquiry records found</td>
            </tr>
          )}
        </tbody>
      </table>

      <h2 className="mb-4 mt-5">Registration Records</h2>
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Registration Number</th>
            <th>Date of Registration</th>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Qualification</th>
            <th>Course Name</th>
            <th>Course Duration</th>
            <th>Total Fees</th>
          </tr>
        </thead>
        <tbody>
          {registrations.length > 0 ? (
            registrations.map(registration => (
              <tr key={registration.registrationNumber}>
                <td>{registration.registrationNumber}</td>
                <td>{registration.dateOfRegistration}</td>
                <td>{registration.name}</td>
                <td>{registration.dateOfBirth}</td>
                <td>{registration.email}</td>
                <td>{registration.mobile}</td>
                <td>{registration.qualification}</td>
                <td>{registration.course}</td>
                <td>{registration.courseDuration}</td>
                <td>{registration.totalFees}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="10">No registration records found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default StudentRecords;
