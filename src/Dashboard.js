import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'; // Make sure to adjust this CSS file for the new styles

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Admin Dashboard</h1>
      <nav className="dashboard-nav">
        <Link to="/enquiry" className="dashboard-nav-item">Enquiry Form</Link>
        <Link to="/registration" className="dashboard-nav-item">Registration Form</Link>
        <Link to="/courses" className="dashboard-nav-item">Courses</Link>
        <Link to="/exam" className="dashboard-nav-item">Exams</Link>
        <Link to="/student-records" className="dashboard-nav-item">Student Records</Link>
      </nav>
    </div>
  );
}

export default Dashboard;
