const Task = require("../models/Task");

const createTask = async (req, res) => {
  try {
    const { requester_id, assigned_to } = req.body;

    const task = new Task({
      requester_id,
      assigned_to
    });

    await task.save();

    res.status(201).json({
      message: "Task created successfully",
      task
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const updateTaskStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const task = await Task.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    res.json({
      message: "Task status updated",
      task
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const getTasks = async (req, res) => {
  try {
    const { userId } = req.query;

    const tasks = await Task.find({
      $or: [
        { requester_id: userId },
        { assigned_to: userId }
      ]
    })
    .populate("requester_id", "name email")
    .populate("assigned_to", "name email");

    res.json(tasks);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


module.exports = { createTask, updateTaskStatus, getTasks };