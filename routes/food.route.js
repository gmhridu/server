const express = require('express');
const { createFoodCard, getFoods, foodById, getPagination, getDataCount, myFoods, myRequest, updateFood, deleteFood } = require('../controllers/food.controller');
const verifyToken = require('../middleware/verifyCookie.middleware');


const foodRouter = express.Router()


foodRouter.post('/', createFoodCard)

foodRouter.get('/', getFoods)

foodRouter.get("/my-food/:email",verifyToken, myFoods);

foodRouter.get("/my-requests/:email", verifyToken, myRequest);

foodRouter.get('/food-filter', getPagination)

foodRouter.get('/food-count', getDataCount)

foodRouter.get('/:id', foodById)

foodRouter.put('/:id', updateFood)

foodRouter.delete('/:id', deleteFood)


module.exports = foodRouter;