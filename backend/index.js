const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const path = require('path');


const app = express();
app.use(cors());
app.use(express.json());
app.use('/static', express.static(path.join(__dirname, 'static')));

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Boopathi@123',
  database: 'it_training'
});

db.connect(err => {
  if (err) throw err;
  console.log('MySQL Connected...');
});

app.post('/api/enquiry', (req, res) => {
  const { enquiryDate, name, address, mobile, email, qualification, gender } = req.body;
  console.log('Received data:', { enquiryDate, name, address, mobile, email, qualification, gender });
  const query = 'INSERT INTO enquiries (enquiryDate, name, address, mobile, email, qualification, gender) VALUES (?, ?, ?, ?, ?, ?, ?)';
  db.query(query, [enquiryDate, name, address, mobile, email, qualification, gender], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      return res.status(500).send('Server error');
    }
    res.status(200).send('Enquiry submitted successfully');
  });
});

app.post('/api/register', (req, res) => {
  const { name, registrationNumber, dateOfRegistration, dateOfBirth, gender, address, mobile, email, qualification, courseName, courseDuration, totalFees } = req.body;
  console.log('Received registration data:', { name, registrationNumber, dateOfRegistration, dateOfBirth, gender, address, mobile, email, qualification, courseName, courseDuration, totalFees });

  const query = 'INSERT INTO students (name, registrationNumber, dateOfRegistration, dateOfBirth, gender, address, mobile, email, qualification, courseName, courseDuration, totalFees) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
  db.query(query, [name, registrationNumber, dateOfRegistration, dateOfBirth, gender, address, mobile, email, qualification, courseName, courseDuration, totalFees], (err, result) => {
    if (err) {
      console.error('Error inserting student data:', err);
      return res.status(500).send('Server error');
    }
    res.status(200).send('Registration successful');
  });
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
