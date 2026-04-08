const express = require("express");

const router = express.Router();

const {
  createTask,
  updateTaskStatus,
  getTasksByUser,
  deleteTask
} = require("../controllers/taskController");

router.post("/", createTask);

router.get("/", getTasksByUser);

router.patch("/:id", updateTaskStatus);

router.delete("/:id", deleteTask);

module.exports = router;