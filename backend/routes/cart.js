const express = require("express");
const { AddToCart, GetCart, RemoveCart } = require("../Controller/cart");
const { VerifyUser } = require("../Middleware/auth");
const router = express.Router();
/*********************** add to cart API */
router.post("/addtocart", VerifyUser, AddToCart);
/*********************** cart product  API */
router.post("/cartproduct", VerifyUser, GetCart);
/*********************** remove API */
router.post("/removecart", VerifyUser, RemoveCart);
module.exports = router;
