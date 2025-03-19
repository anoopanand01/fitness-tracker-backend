const express = require("express");
const router = express.Router();
const { getGoals, getGoalById, createGoal, updateGoal, deleteGoal } = require("../controllers/goalsController");

router.get("/", getGoals);
router.get("/:id", getGoalById);
router.post("/", createGoal);
router.put("/:id", updateGoal);
router.delete("/:id", deleteGoal);

module.exports = router;
