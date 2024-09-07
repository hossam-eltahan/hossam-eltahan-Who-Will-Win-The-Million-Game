
const express = require('express');
const router = express.Router();
const db = require('./db');

// Fetch questions from the database
router.get('/questions', async (req, res) => {
    try {
        const questions = await db.getQuestions();
        res.status(200).json(questions);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch questions' });
    }
});

// Fetch winners from the database
router.get('/winners', async (req, res) => {
    try {
        const winners = await db.getWinners();
        res.status(200).json(winners);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch winners' });
    }
});

// Add new question to the database
router.post('/questions', async (req, res) => {
    const { question } = req.body;
    try {
        await db.addQuestion(question);
        res.status(201).json({ message: 'Question added successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to add question' });
    }
});

module.exports = router;
