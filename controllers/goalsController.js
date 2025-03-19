const Goal = require("../models/Goal");

exports.getGoals = async (req, res) => {
    try {
        const goals = await Goal.find();
        res.json(goals);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getGoalById = async (req, res) => {
    try {
        const goal = await Goal.findById(req.params.id);
        if (!goal) return res.status(404).json({ message: "Goal not found" });
        res.json(goal);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createGoal = async (req, res) => {
    const { userId, goalType, targetValue, startDate, endDate, status } = req.body;
    try {
        const newGoal = new Goal({ userId, goalType, targetValue, startDate, endDate, status });
        await newGoal.save();
        res.status(201).json(newGoal);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updateGoal = async (req, res) => {
    try {
        const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedGoal);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteGoal = async (req, res) => {
    try {
        await Goal.findByIdAndDelete(req.params.id);
        res.json({ message: "Goal deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
