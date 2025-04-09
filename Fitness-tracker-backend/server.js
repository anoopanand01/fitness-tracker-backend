require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");



const adminRoutes = require("./routes/adminRoutes");
const userRoutes = require("./routes/userRoutes");
const activityRoutes = require("./routes/activityRoutes");
const workoutRoutes = require("./routes/workoutRoutes");
const goalsRoutes = require("./routes/goalsRoutes");
const achievementsRoutes = require("./routes/achievementsRoutes");

connectDB();

const app = express();
app.use(express.json());
app.use(cors());

// Debugging: Log when routes are registered
console.log("Registering routes...");



app.use("/api/admin", adminRoutes);
app.use("/api/users", userRoutes);
app.use("/api/activities", activityRoutes);
app.use("/api/workouts", workoutRoutes);
app.use("/api/goals", goalsRoutes);
app.use("/api/achievements", achievementsRoutes);

// Debugging: Log when a request hits the server
app.use((req, res, next) => {
    console.log(`Incoming request: ${req.method} ${req.url}`);
    next();
});

// Default route
app.get("/", (req, res) => {
    res.send("The API is working");
});

// Middleware for handling 404 errors
app.use((req, res, next) => {
    res.status(404).json({ message: "Route not found" });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
