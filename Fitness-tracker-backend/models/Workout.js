const mongoose = require("mongoose");

const WorkoutSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    workoutName: String,
    description: String,
    duration: Number,
    schedule: String
}, { timestamps: true });

module.exports = mongoose.model("Workout", WorkoutSchema);
