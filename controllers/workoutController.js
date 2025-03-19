const Workout = require("../models/Workout");

exports.getWorkouts = async (req, res) => {
    try {
        const workouts = await Workout.find();
        res.json(workouts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getWorkoutById = async (req, res) => {
    try {
        const workout = await Workout.findById(req.params.id);
        if (!workout) return res.status(404).json({ message: "Workout not found" });
        res.json(workout);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createWorkout = async (req, res) => {
    const { userId, workoutName, description, duration, schedule } = req.body;
    try {
        const newWorkout = new Workout({ userId, workoutName, description, duration, schedule });
        await newWorkout.save();
        res.status(201).json(newWorkout);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updateWorkout = async (req, res) => {
    try {
        const updatedWorkout = await Workout.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedWorkout);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteWorkout = async (req, res) => {
    try {
        await Workout.findByIdAndDelete(req.params.id);
        res.json({ message: "Workout deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
