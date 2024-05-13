const express = require('express');
const { requestedFood, getReqFood, getFoodDetailsByEmail, getAllReqFood } = require('../controllers/request.controll');

const reqRouter = express.Router()

reqRouter.post('/', requestedFood)

reqRouter.get('/', getAllReqFood)

reqRouter.get('/:email', getFoodDetailsByEmail)




module.exports = reqRouter;