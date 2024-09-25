import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Courses.css'; // Custom CSS file

function Courses() {
  // Predefined courses
  const predefinedCourses = [
    { id: 1, courseName: 'Basic Computers', description: 'Basic computer skills', syllabus: '/static/BASICS_COMPUTER_COURSE.pdf', materials: '#', notes: '#', exams: '#', assessments: '#' },
    { id: 2, courseName: 'Excel', description: 'Advanced Excel training', syllabus: '#', materials: '#', notes: '#', exams: '#', assessments: '#' },
    { id: 3, courseName: 'Spoken English', description: 'Improve your spoken English', syllabus: '#', materials: '#', notes: '#', exams: '#', assessments: '#' },
    { id: 4, courseName: 'Tally', description: 'Tally accounting software', syllabus: '#', materials: '#', notes: '#', exams: '#', assessments: '#' },
    { id: 5, courseName: 'Python', description: 'Learn Python programming', syllabus: '#', materials: '#', notes: '#', exams: '#', assessments: '#' },
    { id: 6, courseName: 'Full Stack Development', description: 'Become a full stack developer', syllabus: '#', materials: '#', notes: '#', exams: '#', assessments: '#' }
  ];

  const [courses, setCourses] = useState([]); // Dynamic courses fetched from the backend
  const [selectedCourseId, setSelectedCourseId] = useState(null); // Holds the ID of the selected course

  const [newCourse, setNewCourse] = useState({
    courseName: '',
    description: '',
    syllabus: '',
    materials: '',
    notes: '',
    exams: '',
    assessments: '',
  });

  // Fetch dynamic courses from the backend
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

  const handleCourseClick = (courseId) => {
    // Toggle course details when clicked
    setSelectedCourseId(courseId === selectedCourseId ? null : courseId);
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
        {/* Predefined Courses */}
        {predefinedCourses.map((course) => (
          <div key={course.id} className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title" onClick={() => handleCourseClick(course.id)}>
                  {course.courseName}
                </h5>
                {selectedCourseId === course.id && (
                  <div className="course-details mt-2">
                    <p><strong>Description:</strong> {course.description}</p>
                    <p><strong>Syllabus:</strong> <a href={course.syllabus} className="course-link">View Syllabus</a></p>
                    <p><strong>Materials:</strong> <a href={course.materials} className="course-link">View Materials</a></p>
                    <p><strong>Notes:</strong> <a href={course.notes} className="course-link">View Notes</a></p>
                    <p><strong>Exams:</strong> <a href={course.exams} className="course-link">View Exams</a></p>
                    <p><strong>Assessments:</strong> <a href={course.assessments} className="course-link">View Assessments</a></p>
                    <button className="btn btn-info mt-2" onClick={() => handleTest(course.id)}>
                      Take Test
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}

        {/* Dynamic Courses (Fetched from API) */}
        {courses.map((course) => (
          <div key={course.id} className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title" onClick={() => handleCourseClick(course.id)}>
                  {course.courseName}
                </h5>
                {selectedCourseId === course.id && (
                  <div className="course-details mt-2">
                    <p><strong>Description:</strong> {course.description}</p>
                    <p><strong>Syllabus:</strong> <a href={course.syllabus} className="course-link">View Syllabus</a></p>
                    <p><strong>Materials:</strong> <a href={course.materials} className="course-link">View Materials</a></p>
                    <p><strong>Notes:</strong> <a href={course.notes} className="course-link">View Notes</a></p>
                    <p><strong>Exams:</strong> <a href={course.exams} className="course-link">View Exams</a></p>
                    <p><strong>Assessments:</strong> <a href={course.assessments} className="course-link">View Assessments</a></p>
                    <button className="btn btn-info mt-2" onClick={() => handleTest(course.id)}>
                      Take Test
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add New Course Form */}
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
