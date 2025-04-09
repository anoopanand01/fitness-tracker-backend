const Goal = require("../models/Goal");

// Create a new Goal
exports.createGoal = async (req, res) => {
    const { goalType, targetValue, startDate, endDate, status } = req.body;

    try {
        const newGoal = new Goal({
            userId: req.user.id, // Securely attached from JWT
            goalType,
            targetValue,
            startDate,
            endDate,
            status
        });

        await newGoal.save();
        res.status(201).json(newGoal);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all goals for the logged-in user
exports.getGoals = async (req, res) => {
    try {
        const goals = await Goal.find({ userId: req.user.id }); // Filter by userId
        res.json(goals);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a specific goal by ID
exports.getGoalById = async (req, res) => {
    try {
        const goal = await Goal.findById(req.params.id);

        if (!goal) {
            return res.status(404).json({ message: "Goal not found" });
        }

        res.json(goal);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a goal by ID
exports.updateGoal = async (req, res) => {
    try {
        const updatedGoal = await Goal.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(updatedGoal);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a goal by ID
exports.deleteGoal = async (req, res) => {
    try {
        await Goal.findByIdAndDelete(req.params.id);
        res.json({ message: "Goal deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
