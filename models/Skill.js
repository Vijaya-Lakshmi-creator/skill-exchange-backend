const mongoose = require("mongoose");

const SkillSchema = new mongoose.Schema({

  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  skill_name: {
    type: String,
    required: true
  },

  proficiency: {
    type: String,
    enum: ["Beginner", "Intermediate", "Advanced"]
  }

});

module.exports = mongoose.model("Skill", SkillSchema);