// donator.model.js
const mongoose = require('mongoose');

const donatorSchema = new mongoose.Schema({
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
  },
}, { timestamps: true });

const Donator = mongoose.model('Donator', donatorSchema);

module.exports = Donator;
