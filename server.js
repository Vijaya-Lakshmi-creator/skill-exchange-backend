require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const skillRoutes = require("./routes/skillRoutes");
const taskRoutes = require("./routes/taskRoutes");

const app = express();

// ============================
// CONNECT DATABASE
// ============================
connectDB();

// ============================
// CORS CONFIGURATION
// ============================
app.use(
  cors({
    origin: "*", // allow all origins (for development)
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH","OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true, // optional, only if frontend sends cookies
  })
);

// ============================
// MIDDLEWARE
// ============================
app.use(express.json());

// ============================
// ROUTES
// ============================
app.use("/api/users", userRoutes);
app.use("/api/skills", skillRoutes);
app.use("/api/tasks", taskRoutes);

// ============================
// TEST ROUTE
// ============================
app.get("/", (req, res) => {
  res.send("Skill Exchange Backend Running 🚀");
});

// ============================
// SERVER START
// ============================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});