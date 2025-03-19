const express = require("express");
const router = express.Router();
const { getAchievements, getAchievementById, createAchievement, updateAchievement, deleteAchievement } = require("../controllers/achievementsController");

router.get("/", getAchievements);
router.get("/:id", getAchievementById);
router.post("/", createAchievement);
router.put("/:id", updateAchievement);
router.delete("/:id", deleteAchievement);

module.exports = router;
