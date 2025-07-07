const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// Initialize SQLite database
const db = new sqlite3.Database('./submissions.db', (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to the SQLite database.');
    db.run(`CREATE TABLE IF NOT EXISTS contacts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      email TEXT,
      message TEXT,
      timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);
  }
});

// API endpoint to handle contact form submissions
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!email || !message) {
    return res.status(400).json({ error: 'Email and message are required.' });
  }

  const stmt = db.prepare('INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)');
  stmt.run(name, email, message, function (err) {
    if (err) {
      console.error('Error inserting data:', err.message);
      return res.status(500).json({ error: 'Failed to save submission.' });
    }
    console.log(`A row has been inserted with rowid ${this.lastID}`);
    res.status(200).json({ message: 'Submission received successfully!' });
  });
  stmt.finalize();
});

app.get('/api/submissions', (req, res) => {
  db.all('SELECT id, name, email, message, timestamp FROM contacts', [], (err, rows) => {
    if (err) {
      console.error('Error retrieving data:', err.message);
      return res.status(500).json({ error: 'Failed to retrieve submissions.' });
    }
    res.status(200).send(JSON.stringify(rows, null, 2));
  });
});

app.delete('/api/submissions/:id', (req, res) => {
  const { id } = req.params;
  db.run('DELETE FROM contacts WHERE id = ?', id, function (err) {
    if (err) {
      console.error('Error deleting data:', err.message);
      return res.status(500).json({ error: 'Failed to delete submission.' });
    }
    if (this.changes === 0) {
      return res.status(404).json({ message: 'Submission not found.' });
    }
    res.status(200).json({ message: 'Submission deleted successfully!' });
  });
});

app.listen(port, () => {
  console.log(`Backend server listening at http://localhost:${port}`);
});
