const TaskSchema = new mongoose.Schema({

  requester_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  assigned_to: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  title: {
    type: String,
    required: true
  },

  description: {
    type: String
  },

  status: {
    type: String,
    enum: ["pending", "in_progress", "completed"],
    default: "pending"
  },

  created_at: {
    type: Date,
    default: Date.now
  }

});

module.exports = mongoose.model("Task", TaskSchema);