const mongoose = require('mongoose');

const WorkoutSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true }, // e.g., "strength", "cardio"
    difficulty: { type: String, required: true }, // e.g., "beginner"
    equipment: { type: String, required: true }, // e.g., "none"
    duration: { type: Number, required: true }, // in minutes
});

module.exports = mongoose.model('Workout', WorkoutSchema);
