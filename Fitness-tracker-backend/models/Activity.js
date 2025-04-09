const mongoose = require("mongoose");

const ActivitySchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    activityType: String, // e.g., Running, Walking, Yoga
    duration: Number, // in minutes
    distance: Number, // optional, in kilometers
    caloriesBurned: Number,
    date: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model("Activity", ActivitySchema);
