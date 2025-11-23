const createError = require("http-errors");
const express = require("express");
const { default: mongoose } = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
/******************************************Route Path */

const { db_connection } = require("./db_connection/db_connection");
const usersRouter = require("./routes/users");
const usercart = require("./routes/cart");
mongoose.set("debug", true);

/****************************************** */

const app = express();
/***************** databse connection */
db_connection();

/*********************************************** View Engine */
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
/******************************************* Image uploads */
app.set("/api/uploads",express.static(path.join(__dirname, "uploads")));
/************************************************** Routes */

app.use("/users", usersRouter);
app.use("/cart", usercart);

/***************************************404 error Handler */
app.use(function (req, res, next) {
  next(createError(404));
});

/********************************************error handler */
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
