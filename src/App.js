import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import EnquiryForm from './components/EnquiryForm';
import RegistrationForm from './components/RegistrationForm';
import Courses from './components/Courses';
import Exam from './components/Exam';
import StudentRecords from './components/StudentRecords';
import Dashboard from './Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} /> {/* Redirect root path to /dashboard */}
        <Route path="/enquiry" element={<EnquiryForm />} />
        <Route path="/registration" element={<RegistrationForm />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/exam" element={<Exam />} />
        <Route path="/student-records" element={<StudentRecords />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
