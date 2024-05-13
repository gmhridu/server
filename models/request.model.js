const mongoose = require('mongoose');
const Food = require('./food.model');

const reqSchema = new mongoose.Schema({
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
  donatorEmail: String,
  foodStatus: {
    type: String,
    enum: ['Available', 'Not Available'],
    default: 'Available'
  },
  requestDate: {
    type: Date,
    default: Date.now
  },
  email: String,
}, { timestamps: true });

const Request = mongoose.model('Request', reqSchema);

module.exports = Request;
