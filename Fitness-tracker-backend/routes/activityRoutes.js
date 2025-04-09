const express = require("express");
const router = express.Router();
const {
    getActivities,
    getActivityById,
    createActivity,
    updateActivity,
    deleteActivity
} = require("../controllers/activityController");
const { authMiddleware } = require("../middlewares/authMiddleware");

router.use(authMiddleware);

router.get("/", getActivities);
router.get("/:id", getActivityById);
router.post("/", createActivity);
router.put("/:id", updateActivity);
router.delete("/:id", deleteActivity);

module.exports = router;
