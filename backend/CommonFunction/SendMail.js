const nodemailer = require("nodemailer");
const { OTPGenerate } = require("./OTPgenerator");
const { USER } = require("../Modal/user");

/******************************************** MAiler to send otp */
const SendMail = async (email) => {
  /************* OTP */
  const OTP = OTPGenerate();
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "kumarpawan9041491@gmail.com",
      pass: "pdml fhsb cqwp ooer",
    },
  });

  const mailOptions = {
    from: "kumarpawan9041491@gmail.com",
    to: email,
    subject: `Verify Your OTP ${OTP}`,
    text: "Verify OTP to Complete Yout Login For Sequrity",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
  /************ update the otp in datavase */
  await USER.updateOne({ email: email }, { $set: { otp: OTP } }, { new: true });
};
module.exports = { SendMail };
