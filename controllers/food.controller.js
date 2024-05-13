const Donator = require("../models/donator.model");
const Food = require("../models/food.model");

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

// get food by id
const foodById = async (req, res) => {
  try {
    const id = req.params.id
    const food = await Food.findById({_id: id})
    res.status(200).json(food)
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
}

// get pagination
const getPagination = async (req, res) => {
  try {
    const size = parseInt(req.query.size) || 6;
    const page = parseInt(req.query.page) || 1;
    const filter = req.query.filter;
    const sort = req.query.sort === "asc" ? 1 : req.query.sort === "dsc" ? -1 : null;
    const search = req.query.search;


    let query = {
      foodName: { $regex: search, $options: "i" },
    };
    if (filter) query.foodStatus = filter;
    
    let options = {};
    if (sort !== null) options.sort = { expiredDateTime: sort };

    const foods = await Food.find(query).skip((page - 1) * size).limit(size).sort(options.sort);
    res.status(200).json(foods);
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

// data count from db
const getDataCount = async (req, res) => {
  try {
    const filter = req.query.filter;
    const search = req.query.search;
     let query = {
      foodName: { $regex: search, $options: "i" },
    };
    if (filter) query.foodStatus = filter;
    const count = await Food.countDocuments(query);
    res.status(200).json({ count });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

// get My Food List
const myFoods = async (req, res) => {
   try {
    const { email } = req.params;
    const foods = await Food.find({ 'donator.email': email });
    res.status(200).json(foods);
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
}


const myRequest = async (req, res) => {
   try {
    const { email } = req.query;
    const reqFoods = await Food.find({'donator.email': email});
    res.status(200).json(reqFoods);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}



module.exports = {createFoodCard, getFoods, foodById, getPagination, getDataCount, myFoods, myRequest}