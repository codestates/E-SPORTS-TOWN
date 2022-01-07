const mongoose = require('mongoose');

const AuctionDataSchema = new mongoose.Schema({
  id: Number,
  userAddress: String,
  name: String,
  description: String,
  master: String,
  price: Number,
  path: String,
  imgURI: String,
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('AuctionData', AuctionDataSchema);