const express = require("express");
const router = express.Router();

const { createUser, loginUser } = require("../controllers/userController");

router.post("/", createUser);

// ✅ ADD THIS
router.post("/login", loginUser);

module.exports = router;