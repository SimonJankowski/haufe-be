const Favorite = require("../models/Favorite");

const addToFavorites = async (req, res) => {
  const { userId } = req;
  const { characterId } = req.body;
  try {
    const newFavorite = new Favorite({ characterId, creator: userId });
    await newFavorite.save();
    res.status(200).json(newFavorite);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error adding to favorites", error: error.message });
  }
};

const removeFromFavorites = async (req, res) => {
  const { userId } = req;
  const { characterId } = req.body;
  try {
    await Favorite.findOneAndDelete({ characterId, creator: userId });
    res.status(200).json({ message: "Character removed from favorites" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error removing from favorites", error: error.message });
  }
};

module.exports = { addToFavorites, removeFromFavorites };
