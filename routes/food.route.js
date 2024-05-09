const express = require('express');
const { createFoodCard, getFoods } = require('../controllers/food.controller');

const foodRouter = express.Router()

foodRouter.post('/', createFoodCard)

foodRouter.get('/', getFoods)

module.exports = foodRouter;