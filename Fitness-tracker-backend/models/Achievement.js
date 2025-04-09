const mongoose = require("mongoose");

const AchievementSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    achievementType: {
        type: String
    },
    unlockDate: {
        type: Date
    },
    description: {
        type: String
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Achievement", AchievementSchema);
