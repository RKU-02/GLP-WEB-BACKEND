const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  // id: Number,
  title: String,
  description: String,
  price: Number,
  discountPercentage: Number,
  rating: Number,
 
});

exports.Products= mongoose.model("products", productSchema);
