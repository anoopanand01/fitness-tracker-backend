const mongoose = require("mongoose");

const AchievementSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    achievementType: String,
    unlockDate: Date,
    description: String
}, { timestamps: true });

module.exports = mongoose.model("Achievement", AchievementSchema);
