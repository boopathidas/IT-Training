import React, { useState, useEffect } from 'react';
import axios from 'axios';

function StudentRecords() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('/api/students')
      .then(response => {
        setStudents(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the student records!', error);
      });
  }, []);

  return (
    <div>
      <h2>Student Records</h2>
      <ul>
        {students.map(student => (
          <li key={student.id}>{student.name} - {student.registrationNumber}</li>
        ))}
      </ul>
    </div>
  );
}

export default StudentRecords;
