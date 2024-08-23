import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Courses.css'; // Custom CSS file

function Courses() {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [newCourse, setNewCourse] = useState({
    courseName: '',
    description: '',
    syllabus: '',
    materials: '',
    notes: '',
    exams: '',
    assessments: '',
  });

  useEffect(() => {
    axios.get('/api/courses')
      .then(response => {
        setCourses(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the courses!', error);
      });
  }, []);

  const handleChange = (e) => {
    setNewCourse({ ...newCourse, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/courses', newCourse)
      .then(response => {
        setCourses([...courses, response.data]);
        alert('Course added successfully');
        setNewCourse({
          courseName: '',
          description: '',
          syllabus: '',
          materials: '',
          notes: '',
          exams: '',
          assessments: '',
        });
      })
      .catch(error => {
        console.error('There was an error adding the course!', error);
      });
  };

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
  };

  const handleTest = (courseId) => {
    axios.get(`/api/get_exam_questions_with_options?course_id=${courseId}`)
      .then(response => {
        console.log(response.data);
        alert('Test data fetched! Check the console.');
      })
      .catch(error => {
        console.error('Error fetching test data:', error);
      });
  };

  return (
    <div className="container courses-container">
      <h2 className="text-center mb-4">Courses</h2>

      <div className="row mb-4">
        {courses.map((course, index) => (
          <div key={course.id} className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title" onClick={() => handleCourseClick(course)}>
                  {course.courseName}
                </h5>
                {selectedCourse && selectedCourse.id === course.id && (
                  <div className="course-details mt-2">
                    <p><strong>Description:</strong> {selectedCourse.description}</p>
                    <p><strong>Syllabus:</strong> <a href={selectedCourse.syllabus} className="course-link">View Syllabus</a></p>
                    <p><strong>Materials:</strong> <a href={selectedCourse.materials} className="course-link">View Materials</a></p>
                    <p><strong>Notes:</strong> <a href={selectedCourse.notes} className="course-link">View Notes</a></p>
                    <p><strong>Exams:</strong> <a href={selectedCourse.exams} className="course-link">View Exams</a></p>
                    <p><strong>Assessments:</strong> <a href={selectedCourse.assessments} className="course-link">View Assessments</a></p>
                    <button
                      className="btn btn-info mt-2"
                      onClick={() => handleTest(course.id)}
                    >
                      Take Test
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="card p-4 mt-4">
        <h4 className="text-center mb-4">Add New Course</h4>
        <div className="form-group">
          <label>Course Name</label>
          <input name="courseName" type="text" className="form-control" value={newCourse.courseName} onChange={handleChange} placeholder="Enter course name" required />
        </div>
        <div className="form-group">
          <label>Description</label>
          <input name="description" type="text" className="form-control" value={newCourse.description} onChange={handleChange} placeholder="Enter description" required />
        </div>
        <div className="form-group">
          <label>Syllabus</label>
          <textarea name="syllabus" className="form-control" value={newCourse.syllabus} onChange={handleChange} placeholder="Enter syllabus" required></textarea>
        </div>
        <div className="form-group">
          <label>Materials</label>
          <textarea name="materials" className="form-control" value={newCourse.materials} onChange={handleChange} placeholder="Enter materials" required></textarea>
        </div>
        <div className="form-group">
          <label>Notes</label>
          <textarea name="notes" className="form-control" value={newCourse.notes} onChange={handleChange} placeholder="Enter notes"></textarea>
        </div>
        <div className="form-group">
          <label>Exams</label>
          <textarea name="exams" className="form-control" value={newCourse.exams} onChange={handleChange} placeholder="Enter exams"></textarea>
        </div>
        <div className="form-group">
          <label>Assessments</label>
          <textarea name="assessments" className="form-control" value={newCourse.assessments} onChange={handleChange} placeholder="Enter assessments"></textarea>
        </div>
        <button type="submit" className="btn btn-primary btn-block mt-4">Add Course</button>
      </form>
    </div>
  );
}

export default Courses;
