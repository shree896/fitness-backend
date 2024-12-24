const express = require('express');
const router = express.Router();

// Simulated progress tracking
const progress = [];

// Log progress
router.post('/', (req, res) => {
    const { userId, activity, value } = req.body;
    progress.push({ userId, activity, value, date: new Date() });
    res.status(201).json({ message: 'Progress logged' });
});

// Fetch progress
router.get('/:userId', (req, res) => {
    const userProgress = progress.filter((p) => p.userId === req.params.userId);
    res.status(200).json(userProgress);
});

module.exports = router;
