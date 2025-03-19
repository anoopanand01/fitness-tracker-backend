const Activity = require("../models/Activity");

// Get all activities
exports.getActivities = async (req, res) => {
    try {
        const activities = await Activity.find();
        res.json(activities);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get activity by ID
exports.getActivityById = async (req, res) => {
    try {
        const activity = await Activity.findById(req.params.id);
        if (!activity) return res.status(404).json({ message: "Activity not found" });
        res.json(activity);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create activity
exports.createActivity = async (req, res) => {
    const { userId, activityType, stepCount, distance, caloriesBurned } = req.body;
    try {
        const newActivity = new Activity({ userId, activityType, stepCount, distance, caloriesBurned });
        await newActivity.save();
        res.status(201).json(newActivity);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update activity
exports.updateActivity = async (req, res) => {
    try {
        const updatedActivity = await Activity.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedActivity);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete activity
exports.deleteActivity = async (req, res) => {
    try {
        await Activity.findByIdAndDelete(req.params.id);
        res.json({ message: "Activity deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
