const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

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

  // Validate input
  if (!enquiryDate || !name || !address || !mobile || !email || !qualification || !gender) {
    return res.status(400).send('All fields are required');
  }

  const query = 'INSERT INTO enquiries (enquiryDate, name, address, mobile, email, qualification, gender) VALUES (?, ?, ?, ?, ?, ?, ?)';

  db.query(query, [enquiryDate, name, address, mobile, email, qualification, gender], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      return res.status(500).send('Server error');
    }
    res.status(200).send('Enquiry submitted successfully');
  });
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
