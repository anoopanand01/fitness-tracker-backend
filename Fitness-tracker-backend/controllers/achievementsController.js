const Achievement = require("../models/Achievement");

// Create a new Achievement
exports.createAchievement = async (req, res) => {
    const { achievementType, unlockDate, description } = req.body;

    try {
        const newAchievement = new Achievement({
            userId: req.user.id, // ✅ securely set from JWT
            achievementType,
            unlockDate,
            description
        });

        await newAchievement.save();
        res.status(201).json(newAchievement);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all achievements for the logged-in user
exports.getAchievements = async (req, res) => {
    try {
        const achievements = await Achievement.find({ userId: req.user.id }); // ✅ filter by logged-in user
        res.json(achievements);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a specific achievement by ID
exports.getAchievementById = async (req, res) => {
    try {
        const achievement = await Achievement.findById(req.params.id);

        if (!achievement) {
            return res.status(404).json({ message: "Achievement not found" });
        }

        res.json(achievement);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update an achievement by ID
exports.updateAchievement = async (req, res) => {
    try {
        const updatedAchievement = await Achievement.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json(updatedAchievement);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete an achievement by ID
exports.deleteAchievement = async (req, res) => {
    try {
        await Achievement.findByIdAndDelete(req.params.id);
        res.json({ message: "Achievement deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
