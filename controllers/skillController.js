const Skill = require("../models/Skill");

// =======================
// ADD SKILL
// =======================
const addSkill = async (req, res) => {
  try {
    const { user_id, skill_name, proficiency } = req.body;

    if (!user_id || !skill_name || !proficiency) {
      return res.status(400).json({
        error: "user_id, skill_name and proficiency are required"
      });
    }

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
    console.error("Add Skill Error:", error);
    res.status(500).json({ error: error.message });
  }
};


// =======================
// SEARCH SKILL
// =======================
const searchSkill = async (req, res) => {
  try {
    const { skill } = req.query;

    if (!skill) {
      return res.status(400).json({
        error: "Skill query parameter is required"
      });
    }

    const skills = await Skill.find({
      skill_name: { $regex: skill, $options: "i" }
    }).populate("user_id", "name email");

    res.status(200).json(skills);

  } catch (error) {
    console.error("Search Skill Error:", error);
    res.status(500).json({ error: error.message });
  }
};

const getSkillsByUser = async (req, res) => {
  try {

    const { userId } = req.query;

    const skills = await Skill.find({ user_id: userId });

    res.json(skills);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



const updateSkill = async (req, res) => {
  try {

    const { id } = req.params;
    const { proficiency } = req.body;

    const skill = await Skill.findByIdAndUpdate(
      id,
      { proficiency },
      { new: true }
    );

    res.json({
      message: "Skill updated",
      skill
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



const deleteSkill = async (req, res) => {
  try {

    const { id } = req.params;

    await Skill.findByIdAndDelete(id);

    res.json({
      message: "Skill deleted successfully"
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


module.exports = {
  addSkill,
  searchSkill,
  getSkillsByUser,
  updateSkill,
  deleteSkill
};

