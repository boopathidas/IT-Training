import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'; // Assuming you will create CSS for styling

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Admin Dashboard</h1>

      <div className="dashboard-grid">
        <div className="dashboard-item">
          <h3>Enquiry Form</h3>
          <p>Manage and view all enquiries.</p>
          <Link to="/enquiry" className="btn btn-primary">Go to Enquiries</Link>
        </div>

        <div className="dashboard-item">
          <h3>Registration Form</h3>
          <p>Register new students.</p>
          <Link to="/registration" className="btn btn-primary">Go to Registration</Link>
        </div>

        <div className="dashboard-item">
          <h3>Courses</h3>
          <p>Manage course offerings.</p>
          <Link to="/courses" className="btn btn-primary">Go to Courses</Link>
        </div>

        <div className="dashboard-item">
          <h3>Exams</h3>
          <p>Create and manage exams.</p>
          <Link to="/exam" className="btn btn-primary">Go to Exams</Link>
        </div>

        <div className="dashboard-item">
          <h3>Student Records</h3>
          <p>View and manage student records.</p>
          <Link to="/student-records" className="btn btn-primary">Go to Student Records</Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
