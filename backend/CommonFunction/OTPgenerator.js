const otpgenerate = require("otp-generator");
const OTPGenerate = () => {
  return otpgenerate.generate(5, {
    upperCaseAlphabets: false,
    specialChars: false,
    digits: true,
    lowerCaseAlphabets: false,
  });
};
module.exports = { OTPGenerate };
