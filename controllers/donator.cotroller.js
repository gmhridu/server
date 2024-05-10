const Donator = require("../models/donator.model");
const Food = require("../models/food.model");

const saveDonatorPost = async (req, res) => {
 try {
  const donator = req.body;
  const newDonatorPost = new Donator(donator);
  const savedPost = await newDonatorPost.save();
  res.status(201).json(savedPost);
 }
 catch (err) {
  res.status(400).json({ message: err?.message });
 }
}

const donatorAllPost = async (req, res) => {
 try {
  const allDonatorPosts = await Donator.find()
  res.status(200).json(allDonatorPosts);
 }
 catch (err) {
  res.status(400).json({ message: err?.message });
 }
}

module.exports = { saveDonatorPost, donatorAllPost };
