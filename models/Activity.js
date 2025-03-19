const mongoose = require("mongoose");

const ActivitySchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    activityType: { type: String, required: true },
    stepCount: { type: Number, default: 0 },
    distance: { type: Number, default: 0 },
    caloriesBurned: { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model("Activity", ActivitySchema);
