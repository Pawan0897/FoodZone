const { default: mongoose } = require("mongoose");

const { Schema } = mongoose;
/******************************** */
const user = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    password: {
      type: String,
    },
    otp: {
      type: Number,
    },
    token: {
      type: String,
    },
    status: {
      type: String,
      enum: ["inactive", "active", "deleted"],
      default: "inactive",
    },
    isvalid: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports.USER = mongoose.model("user", user);
