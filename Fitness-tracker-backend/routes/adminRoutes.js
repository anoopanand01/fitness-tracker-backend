const express = require("express");
const router = express.Router();
const { registerAdmin, loginAdmin, getAdmins } = require("../controllers/AdminControllers");

router.post("/register", registerAdmin); // ✅ Register Admin
router.post("/login", loginAdmin);       // ✅ Admin Login
router.get("/", getAdmins);              // ✅ Get All Admins

module.exports = router;
