const { SendMail } = require("../CommonFunction/SendMail");
const { USER } = require("../Modal/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

/*************************** User Signup */

const UserSignUP = async (req, res) => {
  try {
    /*************** */
    const { name, password, email } = req.body;
    const Email = email.toLowerCase();
    const checkemail = await USER.findOne({ email: Email });

    /*************** email check */
    if (checkemail) {
      return res.status(400).send({
        message: "Email Is Already Exist !!!",
      });
    } else {
      /*************** add  */
      const hashpass = await bcrypt.hash(password, 10);
      const data = new USER({
        name,
        email,
        password: hashpass,
      });
      /*************** save data */
      const savedata = await data.save();
      /************ Wend mail for OTP */
      // SendMail(email);
      return res.status(200).send({
        message: "Signup Successfully!!!",
        text: "Now! You can Login!!!",
        data: savedata,
        statuscode: 200,
      });
    }
  } catch (error) {
    /***************  error check */
    return res.status(500).send({
      message: `server Error ${error}`,
    });
  }
};

/*************************** OTP Verfication */
const OTP_Verify = async (req, res) => {
  try {
    /***************  request var*/
    const { otp } = req.body;

    const verify_otp = await USER.findOne({ otp: otp });
    /*************** condition chheck */
    if (verify_otp) {
      /*************** update */
      verify_otp.isvalid = true;
      verify_otp.otp = "";

      await verify_otp.save();
      /*************** return */
      return res.status(200).send({
        message: " Verfification Successfull !!!",
        data: verify_otp,
      });
    } else {
      /*************** not verify */
      return res.status(400).send({
        message: "Not valid OTP !!!",
        data: verify_otp,
      });
    }
  } catch (error) {
    /*************** error check */

    return res.status(500).send({
      message: `server Error ${error}`,
    });
  }
};

/**************************** Login User API */

const UserLogin = async (req, res) => {
  try {
    /*************** var */
    const { email, password } = req.body;
    const data = await USER.findOne({ email });
    /*************** check mail */
    if (!data) {
      return res.send({
        statuscode: 400,
        message: "Email is not Valid!!",
      });
    } else if (!bcrypt.compareSync(password, data?.password)) {
      /*************** pass chek */

      return res.send({
        message: "Password is not valid !!!",
        statuscode: 400,
      });
    } else {
      /******** toen created */
      const token = jwt.sign({ userid: data?._id }, "zone");
      //  await USER.updateOne(
      //   { email: email },
      //   { $set: { token: token } },
      //   { new: true }
      // );
      data.token = token;
      data.status = "active";
      await data.save();
      const user = {
        email: data?.email,
        status: data?.status,
        token: data?.token,
      };
      /*************** logined */
      return res.send({
        statuscode: 200,
        message: "Login Successfully !!!",
        text: "You are Logined Successfully!!!",
        data: user,
      });
    }
  } catch (error) {
    /*************** */
    return res.status(500).send({
      message: `server Error ${error}`,
    });
  }
};

/********************* Fetch Token details ApI */
const TokenDetail = async (req, res) => {
  const userId = req.userId;
  console.log(userId, "...............");

  const token_detail = await USER.findOne({ _id: userId });
  if (token_detail) {
    return res.send({
      statuscode: 200,
      data: token_detail,
    });
  } else {
    return res.send({
      message: "Token .....",
      statuscode: 400,
    });
  }
};

/*********************USER Logout */
const UserLogout = async (req, res) => {
  try {
    const userid = req.userId;
    const checkUser = await USER.findOne({ _id: userid });
    if (checkUser) {
      checkUser.status = "inactive";
      checkUser.token = "";
      await checkUser.save();
      return res.send({
        statuscode: 200,
        message: "Logout Successfully !!!",
        text: "Successfully you are Logout !!!",
      });
    } else {
      return res.send({
        statuscode: 400,
        message: "User is not Find !!!",
      });
    }
  } catch (error) {
    return res.send({
      statuscode: 500,
      message: error,
    });
  }
};

module.exports = { UserSignUP, OTP_Verify, UserLogin, TokenDetail, UserLogout };
