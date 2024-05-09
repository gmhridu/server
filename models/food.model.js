const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  foodName: {
    type: String,
    required: true
  },
  foodImage: {
    type: String,
    required: true
  },
  foodQuantity: {
    type: Number,
    required: true
  },
  pickupLocation: {
    type: String,
    required: true
  },
  expiredDateTime: {
    type: Date,
    required: true
  },
  additionalNotes: String,
  donator: {
   name: {
    type: String,
    required: true
   },
   email: {
    type: String,
    required: true
   },
   image: {
    type: String,
    required: true
   }
  },
  foodStatus: {
    type: String,
    enum: ['available', 'not available'],
    default: 'available'
  },
  requestDate: {
    type: Date,
    default: Date.now
  },
  foodId: {
    type: String,
    required: true
  }
}, { timestamps: true });

const Food = mongoose.model('Food', foodSchema, 'foods');

module.exports = Food;
