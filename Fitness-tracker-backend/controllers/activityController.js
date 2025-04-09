const Activity = require("../models/Activity");

// Create activity
exports.createActivity = async (req, res) => {
    const { activityType, duration, distance, caloriesBurned, date } = req.body;
    try {
        const activity = new Activity({
            userId: req.user.id,
            activityType,
            duration,
            distance,
            caloriesBurned,
            date
        });
        await activity.save();
        res.status(201).json(activity);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all activities of logged-in user
exports.getActivities = async (req, res) => {
    try {
        const activities = await Activity.find({ userId: req.user.id });
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

// Update activity
exports.updateActivity = async (req, res) => {
    try {
        const updated = await Activity.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updated);
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
