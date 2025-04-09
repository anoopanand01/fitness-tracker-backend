const express = require("express");
const router = express.Router();
const { getGoals, getGoalById, createGoal, updateGoal, deleteGoal } = require("../controllers/goalsController");
const { authMiddleware } = require("../middlewares/authMiddleware"); // ✅ Add this

// ✅ Apply authMiddleware to protect the routes
router.get("/", authMiddleware, getGoals);
router.get("/:id", authMiddleware, getGoalById);
router.post("/", authMiddleware, createGoal);
router.put("/:id", authMiddleware, updateGoal);
router.delete("/:id", authMiddleware, deleteGoal);

module.exports = router;
