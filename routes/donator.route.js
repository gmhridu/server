const express = require('express');
const { saveDonatorPost, donatorAllPost } = require('../controllers/donator.cotroller');

const donatorRouter = express.Router()

donatorRouter.post('/', saveDonatorPost)

donatorRouter.get('/', donatorAllPost)

module.exports = donatorRouter;