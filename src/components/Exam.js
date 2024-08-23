import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Exam() {
  const [exams, setExams] = useState([]);
  const [newExam, setNewExam] = useState({
    examName: '',
    type: '',
    duration: '',
    passingCriteria: '',
  });

  useEffect(() => {
    axios.get('/api/exams')
      .then(response => {
        setExams(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the exams!', error);
      });
  }, []);

  const handleChange = (e) => {
    setNewExam({ ...newExam, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/exams', newExam)
      .then(response => {
        setExams([...exams, response.data]);
        alert('Exam added successfully');
      })
      .catch(error => {
        console.error('There was an error adding the exam!', error);
      });
  };

  return (
    <div>
      <h2>Exams</h2>
      <ul>
        {exams.map(exam => (
          <li key={exam.id}>{exam.examName} - {exam.type}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input name="examName" value={newExam.examName} onChange={handleChange} placeholder="Exam Name" />
        <input name="type" value={newExam.type} onChange={handleChange} placeholder="Type" />
        <input name="duration" value={newExam.duration} onChange={handleChange} placeholder="Duration" />
        <input name="passingCriteria" value={newExam.passingCriteria} onChange={handleChange} placeholder="Passing Criteria" />
        <button type="submit">Add Exam</button>
      </form>
    </div>
  );
}

export default Exam;
