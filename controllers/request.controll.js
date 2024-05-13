const Food = require("../models/food.model");
const Request = require("../models/request.model");

const requestedFood = async (req, res) => {
  try {
    const requestBody = req.body;
    const reqFood = new Request(requestBody);
    const saveReqFood = await reqFood.save();
    res.status(200).json(saveReqFood);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllReqFood = async (req, res) => {
  try {
    const foodDetails = await Request.find()
    res.status(200).json(foodDetails);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const getReqFood = async (req, res) => {
  try {
    const foodId = req.params.id;
    const foodDetails = await Request.findById(foodId);
    if (!foodDetails) {
      return res.status(404).json({ message: "Food details not found" });
    }
    res.status(200).json(foodDetails);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getFoodDetailsByEmail = async (req, res) => {
  try {
    const email = req.params.email;
    const foodDetails = await Request.find({ "donator.email": email });
    res.status(200).json(foodDetails);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  requestedFood,
  getAllReqFood,
  getReqFood,
  getFoodDetailsByEmail,
};
