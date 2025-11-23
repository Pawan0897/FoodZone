const jwt = require("jsonwebtoken");

const VerifyUser = async (req, res, next) => {
  try {
    /*************************************** */
    const token = req.headers.authorization;
    const verify = jwt.verify(token, "zone");
    /*************************************** */
    if (!verify) {
      return res.send({
        statuscode: 400,
        message: "invalid Token !!!",
      });
    } else {
      /*************************************** */
      req.userId = verify?.userid;
      console.log(req.userId, "llllllllllllllllllllllllllllllllllll");

      req.user = verify?.user;
      next();
    }
  } catch (error) {
    /*************************************** */
    return res.status(500).send({
      message: `Server error ${error}`,
    });
  }
  /*************************************** */
};
module.exports = { VerifyUser };
