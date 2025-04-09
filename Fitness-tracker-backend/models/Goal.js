const mongoose = require("mongoose");

const GoalSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    goalType: String,
    targetValue: Number,
    startDate: Date,
    endDate: Date,
    status: String
}, { timestamps: true });

module.exports = mongoose.model("Goal", GoalSchema);
