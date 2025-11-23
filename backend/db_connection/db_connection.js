const mongoose = require("mongoose");
const db_connection = async () => {
  await mongoose
    .connect("mongodb://127.0.0.1:27017/foodzone")
    .then(() => {
      console.log("database connection Successfully !!!");
    })
    .catch((err) => console.log("Something wrong ", err));
};

module.exports = { db_connection };
