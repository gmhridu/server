const express = require('express');
const { createFoodCard, getFoods, foodById, getPagination, getDataCount, myFoods, myRequest } = require('../controllers/food.controller');
const Food = require('../models/food.model');


const foodRouter = express.Router()

foodRouter.post('/', createFoodCard)

foodRouter.get('/', getFoods)

foodRouter.get('/my-food/:email', myFoods);


foodRouter.get('/my-requests/:email', myRequest);



foodRouter.get('/food-filter', getPagination)

foodRouter.get('/food-count', getDataCount)

foodRouter.get('/:id', foodById)



module.exports = foodRouter;