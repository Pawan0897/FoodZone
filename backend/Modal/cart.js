const { default: mongoose, mongo } = require("mongoose");

const { Schema } = mongoose;

const cart = new Schema({
  userid: {
    type: mongoose.Types.ObjectId,
    ref: "user",
  },
  ProductName: {
    type: String,
  },
  ProductPrice: {
    type: Number,
  },
  ProductQuantity: {
    type: Number,
  },
  image: {
    type: String,
  },
  addeddAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports.CART = mongoose.model("cartproduct", cart);
