const Workout = require("../models/Workout");

// Get all workouts for the logged-in user
exports.getWorkouts = async (req, res) => {
    try {
        const workouts = await Workout.find({ userId: req.user.id }); // 👈 scoped to user
        res.json(workouts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get single workout by ID
exports.getWorkoutById = async (req, res) => {
    try {
        const workout = await Workout.findById(req.params.id);
        if (!workout) return res.status(404).json({ message: "Workout not found" });

        // Optional: restrict access only to the workout's owner
        if (workout.userId.toString() !== req.user.id) {
            return res.status(403).json({ message: "Unauthorized access" });
        }

        res.json(workout);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new workout
exports.createWorkout = async (req, res) => {
    const { workoutName, description, duration, schedule } = req.body;

    try {
        const newWorkout = new Workout({
            userId: req.user.id, // ✅ From token
            workoutName,
            description,
            duration,
            schedule
        });

        await newWorkout.save();
        res.status(201).json(newWorkout);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a workout
exports.updateWorkout = async (req, res) => {
    try {
        const workout = await Workout.findById(req.params.id);
        if (!workout) return res.status(404).json({ message: "Workout not found" });

        if (workout.userId.toString() !== req.user.id) {
            return res.status(403).json({ message: "Unauthorized access" });
        }

        const updatedWorkout = await Workout.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedWorkout);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a workout
exports.deleteWorkout = async (req, res) => {
    try {
        const workout = await Workout.findById(req.params.id);
        if (!workout) return res.status(404).json({ message: "Workout not found" });

        if (workout.userId.toString() !== req.user.id) {
            return res.status(403).json({ message: "Unauthorized access" });
        }

        await workout.deleteOne();
        res.json({ message: "Workout deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
