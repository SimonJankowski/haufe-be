const axios = require("axios");

const baseUrl = process.env.BASE_API_URL || "https://rickandmortyapi.com/api";

const getCharacters = async (req, res) => {
  const page = req.query.page || 1;

  try {
    const url = `${baseUrl}/character?page=${page}`;
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching characters", error: error.message });
  }
};

const getCharacterDetails = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await axios.get(`${baseUrl}/character/${id}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching character details",
      error: error.message,
    });
  }
};

module.exports = {
  getCharacterDetails,
  getCharacters,
};
