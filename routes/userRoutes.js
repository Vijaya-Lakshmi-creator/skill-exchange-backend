const express = require("express");
const router = express.Router();

const {
  createUser,
  loginUser,
  getUserFullData
} = require("../controllers/userController");

// =======================
// CREATE USER
// =======================
router.post("/", createUser);

// =======================
// LOGIN USER
// =======================
router.post("/login", loginUser);

// =======================
// GET FULL USER DATA 🔥
// =======================
router.get("/:id/full", getUserFullData);

module.exports = router;