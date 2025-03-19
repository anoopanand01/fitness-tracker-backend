const Achievement = require("../models/Achievement");

exports.getAchievements = async (req, res) => {
    try {
        const achievements = await Achievement.find();
        res.json(achievements);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getAchievementById = async (req, res) => {
    try {
        const achievement = await Achievement.findById(req.params.id);
        if (!achievement) return res.status(404).json({ message: "Achievement not found" });
        res.json(achievement);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createAchievement = async (req, res) => {
    const { userId, achievementType, unlockDate, description } = req.body;
    try {
        const newAchievement = new Achievement({ userId, achievementType, unlockDate, description });
        await newAchievement.save();
        res.status(201).json(newAchievement);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updateAchievement = async (req, res) => {
    try {
        const updatedAchievement = await Achievement.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedAchievement);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteAchievement = async (req, res) => {
    try {
        await Achievement.findByIdAndDelete(req.params.id);
        res.json({ message: "Achievement deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
