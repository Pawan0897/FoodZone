const { default: mongoose } = require("mongoose");
const { Schema } = mongoose;
const product = new Schema({
  Name: {
    type: String,
  },
  Price: {
    type: Number,
  },
  Quantity: {
    type: Number,
  },
});
module.exports.PRODUCT = mongoose.model("product", product);
