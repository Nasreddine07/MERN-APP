const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  id : Number,
  name: String,
  title: String,
  Des: String,
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "AuthUser",
  },
  Image: mongoose.Schema.Types.Mixed,
});

module.exports = mongoose.model("Product", ProductSchema)