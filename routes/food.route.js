const express = require('express');
const { createFoodCard, getFoods, foodById, getPagination, getDataCount } = require('../controllers/food.controller');

const foodRouter = express.Router()

foodRouter.post('/', createFoodCard)

foodRouter.get('/', getFoods)

foodRouter.get('/food-filter', getPagination)

foodRouter.get('/food-count', getDataCount)

foodRouter.get('/:id', foodById)


module.exports = foodRouter;