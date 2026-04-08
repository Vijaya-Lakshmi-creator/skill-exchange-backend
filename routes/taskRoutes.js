const express = require("express");

const router = express.Router();

const {
  createTask,
  updateTaskStatus,
  getTasks,
  deleteTask
} = require("../controllers/taskController");

router.post("/", createTask);

router.get("/", getTasks);

router.patch("/:id", updateTaskStatus);

router.delete("/:id", deleteTask);

module.exports = router;