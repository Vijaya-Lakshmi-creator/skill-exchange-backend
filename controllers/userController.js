const User = require("../models/User");
const Skill = require("../models/Skill");
const Task = require("../models/Task");

// =======================
// CREATE USER
// =======================
const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = new User({ name, email, password });
    await user.save();

    res.status(201).json({
      message: "User created successfully",
      user
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// =======================
// LOGIN USER
// =======================
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    if (user.password !== password) {
      return res.status(400).json({
        message: "Invalid password"
      });
    }

    res.json({
      message: "Login successful",
      user
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// =======================
// GET FULL USER DATA 🔥
// =======================
const getUserFullData = async (req, res) => {
  try {
    const { id } = req.params;

    // 1️⃣ Get user
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    // 2️⃣ Get skills
    const skills = await Skill.find({ user_id: id });

    // 3️⃣ Get tasks
    const tasks = await Task.find({
      $or: [
        { requester_id: id },
        { assigned_to: id }
      ]
    });

    // 4️⃣ Send combined response
    res.json({
      user,
      skills,
      tasks
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// =======================
// EXPORTS
// =======================
module.exports = {
  createUser,
  loginUser,
  getUserFullData
};