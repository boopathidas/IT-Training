CREATE DATABASE it_training;
use it_training;

CREATE TABLE enquiries (
  id INT AUTO_INCREMENT PRIMARY KEY,
  enquiry_date DATE,
  name VARCHAR(255),
  address TEXT,
  mobile VARCHAR(15),
  email VARCHAR(255),
  qualification VARCHAR(255),
  gender VARCHAR(10)
);

CREATE TABLE students (
  id INT AUTO_INCREMENT PRIMARY KEY,
  registration_number VARCHAR(255),
  date_of_registration DATE,
  date_of_birth DATE,
  gender VARCHAR(10),
  address TEXT,
  mobile VARCHAR(15),
  email VARCHAR(255),
  qualification VARCHAR(255),
  total_fees DECIMAL(10,2)
);

CREATE TABLE courses (
  id INT AUTO_INCREMENT PRIMARY KEY,
  course_name VARCHAR(100) NOT NULL,
  description TEXT,
  syllabus TEXT,
  materials TEXT
);

CREATE TABLE exams (
  id INT AUTO_INCREMENT PRIMARY KEY,
  exam_name VARCHAR(100) NOT NULL,
  type VARCHAR(50),
  duration INT,
  passing_criteria DECIMAL(5, 2)
);