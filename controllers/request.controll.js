const Food = require("../models/food.model");
const Request = require("../models/request.model");



const requestedFood = async (req, res) => {
  try {
    const { foodId, email, donatorEmail } = req.body;

    const food = await Food.findById(foodId);

    if (!food) {
      return res.status(404).json({ message: "Food not found" });
    }

    food.foodQuantity = 0;
    food.foodStatus = "Not Available";
    await food.save();

    const request = new Request({
      ...req.body,
      foodName: food.foodName,
      foodImage: food.foodImage,
      foodStatus: food.foodStatus,
      expiredDateTime: food.expiredDateTime,
      donatorEmail: food.donatorEmail,
      donatorEmail,
      email: email,
    });

    await request.save();

    res.status(200).json(request);
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
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
    const foodDetails = await Request.find({ 'donatorEmail': email });
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
