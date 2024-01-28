const express = require("express");
const {
  getCharacters,
  getCharacterDetails,
} = require("../controllers/charactersController");
const router = express.Router();

router.get("/", getCharacters);
router.get("/:id", getCharacterDetails);

module.exports = router;
