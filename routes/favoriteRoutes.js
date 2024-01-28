const express = require("express");
const {
  addToFavorites,
  removeFromFavorites,
} = require("../controllers/favouriteController");
const router = express.Router();
const { authMiddleware } = require("../middleware/authMiddleware");

router.post("/add", authMiddleware, addToFavorites);
router.post("/remove", authMiddleware, removeFromFavorites);

module.exports = router;
