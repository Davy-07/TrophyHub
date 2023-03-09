require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const CustomAPIError = require("../errors/customError");

const config = {
  apiKey: process.env.mojoauth_api,
};
const mojoauth = require("mojoauth-sdk")(config);

const register = async (req, res) => {
  const { name, email, phone, pwd } = req.body;
  if (!name || !email || !phone || !pwd) {
    //throw new CustomAPIError("Please Provide all the fields",401);
    return res.status(401).json({ message: "Please Provide all the fields" });
  }

  const already_email = await User.find({ email });
  const already_phone = await User.find({ phone });
  if (already_phone.length > 0 || already_email.length > 0) {
    //throw new CustomAPIError('User Already Exists')
    return res.status(401).json({ message: "User Already Exists" });
  }

  const password = await bcrypt.hash(pwd, 10);

  let query = {};
  query.language = "English";

  try {
    const response = await mojoauth.mojoAPI.signinWithEmailOTP(email, query);
    const { state_id } = response;
    const new_user = await User.create({ name, email, phone, password });
    console.log(new_user);
    const { _id } = new_user;
    res.status(200).json({ message: "Success", state_id, _id });
  } catch (err) {
    throw new CustomAPIError("Oops! Something went wrong", 401);
  }
};

const verify = async (req, res) => {
  const { state_id, _id, otp } = req.body;
  const response = await mojoauth.mojoAPI.verifyEmailOTP(otp, state_id);
  console.log(response);
  const { authenticated } = response;
  if (authenticated) {
    const verify_user = await User.updateOne(
      { _id },
      {
        isVerified: true,
      }
    );
    res.status(200).json({ msg: "OTP Verified" });
  } else {
    return res.status(400).json({ message: "Please enter the correct otp" });
  }
};

const signin = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Please Enter all the fields" });
  }

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: "User Does Not Exist" });
  }

  const result = await bcrypt.compare(password, user.password);
  if (!result) {
    return res.status(400).json({ message: "Invalid Email Or Password" });
  }

  try {
    const accessToken = jwt.sign(
      { id: user._id, name: user.name, email: user.email, phone: user.phone },
      process.env.JWT_TOKEN,
      { expiresIn: "1d" }
    );
    const refreshToken = jwt.sign(
      { id: user._id, name: user.name, email: user.email, phone: user.phone },
      process.env.refresh_secret,
      { expiresIn: "30d" }
    );

    console.log(`access - ${accessToken} refresh- ${refreshToken}`);
    await User.updateOne(
      { email: email },
      {
        refreshToken: refreshToken,
      }
    );
    res
      .status(200)
      .cookie("refresh", refreshToken, {
        httpOnly: true,
        secure: true,
        maxAge: 30 * 24 * 60 * 60 * 1000,
      })
      .json({ message: "Signin Successfull", accessToken });
  } catch (err) {
    throw new CustomAPIError("Oops! Something Went Wrong");
  }
};

const refresh = async (req, res) => {
  console.log(req.cookies.refresh);
  if (req.cookies.refresh) {
    const refreshToken = req.cookies.refresh;
    const payload = await User.findOne({ refreshToken });
    const user = {
      id: payload._id,
      name: payload.name,
      email: payload.email,
      phone: payload.phone,
    };
    try {
      const verify = jwt.verify(refreshToken, process.env.refresh_secret);
      const newAccessToken = jwt.sign(user, process.env.JWT_TOKEN, {
        expiresIn: "1d",
      });
      res.status(200).json({ newAccessToken });
    } catch (err) {
      throw new CustomAPIError("Token Verification failed", 401);
    }
  }
};

const demo = async (req, res) => {
  res.status(200).json({ message: "Token Verification SuccesFull" });
  console.log(req.user);
};

module.exports = { register, verify, signin, demo, refresh };
