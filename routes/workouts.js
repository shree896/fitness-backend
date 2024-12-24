const express = require('express');
const Workout = require('../models/Workout');
const router = express.Router();

// Fetch workouts
router.get('/', async (req, res) => {
    try {
        const workouts = await Workout.find();
        res.status(200).json(workouts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Add a workout (admin feature)
router.post('/', async (req, res) => {
    try {
        const { name, type, difficulty, equipment, duration } = req.body;
        const newWorkout = new Workout({ name, type, difficulty, equipment, duration });
        await newWorkout.save();
        res.status(201).json(newWorkout);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
