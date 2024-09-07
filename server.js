const express = require('express');
const cors = require('cors');
const db = require('./db');  // Import the database connection
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Built-in JSON parser

// API Endpoints

// Get all questions
app.get('/api/questions', async (req, res) => {
  try {
    const [results] = await db.query('SELECT * FROM questions');
    const formattedResults = results.map(row => ({
      ...row,
      answers: JSON.parse(row.answers)  // Parse JSON string into an array
    }));
    res.json(formattedResults);
  } catch (err) {
    console.error('Error fetching questions:', err.message);
    res.status(500).json({ error: 'Failed to fetch questions', details: err.message });
  }
});

// Add a new question
app.post('/api/questions', async (req, res) => {
  const { question, answers, correctAnswer } = req.body;

  if (!question || !answers || correctAnswer === undefined || !Array.isArray(answers) || answers.length !== 4) {
    return res.status(400).json({ error: 'Missing or invalid required fields' });
  }

  try {
    const [result] = await db.query('INSERT INTO questions (question, answers, correctAnswer) VALUES (?, ?, ?)', [
      question,
      JSON.stringify(answers),
      correctAnswer
    ]);
    res.status(201).json({ id: result.insertId, message: 'Question added successfully' });
  } catch (err) {
    console.error('Error adding question:', err.message);
    res.status(500).json({ error: 'Failed to add question', details: err.message });
  }
});

// Update a question
app.put('/api/questions/:id', async (req, res) => {
  const { id } = req.params;
  const { question, answers, correctAnswer } = req.body;
  
  if (!question || !answers || correctAnswer === undefined || !Array.isArray(answers) || answers.length !== 4) {
    return res.status(400).json({ error: 'Missing or invalid required fields' });
  }

  try {
    const [result] = await db.query(
      'UPDATE questions SET question = ?, answers = ?, correctAnswer = ? WHERE id = ?', 
      [question, JSON.stringify(answers), correctAnswer, id]
    );
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Question not found' });
    }

    res.status(200).json({ message: 'Question updated successfully', affectedRows: result.affectedRows });
  } catch (err) {
    console.error('Error updating question:', err.message);
    res.status(500).json({ error: 'Failed to update question', details: err.message });
  }
});

// Delete a question
app.delete('/api/questions/:id', async (req, res) => {
  const { id } = req.params;
  
  try {
    const [result] = await db.query('DELETE FROM questions WHERE id = ?', [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Question not found' });
    }

    res.status(200).json({ message: 'Question deleted successfully', affectedRows: result.affectedRows });
  } catch (err) {
    console.error('Error deleting question:', err.message);
    res.status(500).json({ error: 'Failed to delete question', details: err.message });
  }
});

// Get all winners
app.get('/api/winners', async (req, res) => {
  try {
    const [results] = await db.query('SELECT * FROM winners');
    res.json(results);
  } catch (err) {
    console.error('Error fetching winners:', err.message);
    res.status(500).json({ error: 'Failed to fetch winners', details: err.message });
  }
});

// Add a new winner
app.post('/api/winners', async (req, res) => {
  const { name } = req.body;

  if (!name || typeof name !== 'string') {
    return res.status(400).json({ error: 'Name is required and should be a string' });
  }

  try {
    const [result] = await db.query('INSERT INTO winners (name) VALUES (?)', [name]);
    res.status(201).json({ id: result.insertId, message: 'Winner added successfully' });
  } catch (err) {
    console.error('Error adding winner:', err.message);
    res.status(500).json({ error: 'Failed to add winner', details: err.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
