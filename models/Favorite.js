const mongoose = require("mongoose");

const FavoriteSchema = new mongoose.Schema({
  characterId: {
    type: String,
    required: true,
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  dateAdded: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Favorite", FavoriteSchema);
