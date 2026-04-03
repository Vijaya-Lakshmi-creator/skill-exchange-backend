const express = require("express");
const router = express.Router();

const { createTask, updateTaskStatus, getTasks } = require("../controllers/taskController");

router.post("/", createTask);

router.patch("/:id", updateTaskStatus);

router.get("/", getTasks);

module.exports = router;