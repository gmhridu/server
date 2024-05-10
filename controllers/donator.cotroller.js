const Donator = require("../models/donator.model");



const saveDonatorPost = async (req, res) => {
 try {
  const donator = req.body
  const newDonatorPost = new Donator(donator);
  const savePost = await newDonatorPost.save();
  res.status(201).json(savePost);
 }
 catch (err) {
  res.status(400).json({ message: err?.message });
 }
}

// get donator all posts
const donatorAllPost = async (req, res) => {
 try {
  const allDonatorPost = await Donator.find();
  res.status(200).json(allDonatorPost);
 }
 catch (err) {
  res.status(400).json({ message: err?.message });
 }
}

module.exports = {saveDonatorPost, donatorAllPost};