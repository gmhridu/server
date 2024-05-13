const mongoose = require('mongoose');

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
  donator: {
    email: {
      type: String,
      required: true
    },
    name: {
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
    enum: ['Available', 'Not Available'],
    default: 'Available'
  },
  requestDate: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

const Request = mongoose.model('Request', reqSchema);

module.exports = Request;