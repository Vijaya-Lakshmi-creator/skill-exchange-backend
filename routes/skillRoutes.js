const express = require("express");

const router = express.Router();

const {
  addSkill,
  searchSkill,
  getSkillsByUser,
  updateSkill,
  deleteSkill
} = require("../controllers/skillController");

router.post("/", addSkill);

router.get("/search", searchSkill);

router.get("/", getSkillsByUser);

router.patch("/:id", updateSkill);

router.delete("/:id", deleteSkill);

module.exports = router;