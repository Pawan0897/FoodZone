const express = require("express");
const {
  UserSignUP,
  UserLogin,
  TokenDetail,
  UserLogout,
} = require("../Controller/user");
const { VerifyUser } = require("../Middleware/auth");
const router = express.Router();

/*********************** Register API */
router.post("/signup", UserSignUP);
/*********************** login API */
router.post("/login", UserLogin);
/*********************** token varify API */
router.get("/token", VerifyUser, TokenDetail);
/*********************** logout API */
router.post("/logout", VerifyUser, UserLogout);

module.exports = router;
