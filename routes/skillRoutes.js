const express = require("express");
const router = express.Router();

const { addSkill, searchSkill } = require("../controllers/skillController");

router.post("/", addSkill);

router.get("/search", searchSkill);

module.exports = router;