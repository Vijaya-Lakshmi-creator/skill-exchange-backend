const Skill = require("../models/Skill");

const addSkill = async (req, res) => {
  try {
    const { user_id, skill_name, proficiency } = req.body;

    const skill = new Skill({
      user_id,
      skill_name,
      proficiency
    });

    await skill.save();

    res.status(201).json({
      message: "Skill added successfully",
      skill
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const searchSkill = async (req, res) => {
  try {
    const { skill } = req.query;

    const skills = await Skill.find({
      skill_name: { $regex: skill, $options: "i" }
    }).populate("user_id", "name email");

    res.json(skills);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { addSkill, searchSkill };