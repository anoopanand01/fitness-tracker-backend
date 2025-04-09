const express = require("express");
const router = express.Router();
const { getWorkouts, getWorkoutById, createWorkout, updateWorkout, deleteWorkout } = require("../controllers/workoutController");
const { authMiddleware } = require("../middlewares/authMiddleware"); // Import auth middleware

// Protect workout routes
router.get("/", authMiddleware, getWorkouts);
router.get("/:id", authMiddleware, getWorkoutById);
router.post("/", authMiddleware, createWorkout);
router.put("/:id", authMiddleware, updateWorkout);
router.delete("/:id", authMiddleware, deleteWorkout);

module.exports = router;
