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
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Donator' 
  },
  foodStatus: {
    type: String,
    enum: ['available', 'not available'],
    default: 'available'
  },
  requestDate: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

const Food = mongoose.model('Food', foodSchema);

module.exports = Food;

