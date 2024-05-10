const Food = require("../models/food.model")

// create food card

const createFoodCard = async (req, res) => {
 try {
  const body = req.body
  const newFoodCard = await Food.create(body)
  res.status(201).json(newFoodCard)
 } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
}

// get all foods
const getFoods = async (req, res) => {
 try {
  const foods = await Food.find()
  res.status(200).json(foods)
 } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
}


module.exports = {createFoodCard, getFoods}