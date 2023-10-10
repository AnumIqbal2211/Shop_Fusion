import User from "../database/modals/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import crypto from "crypto";

// controller for user registration

export const register = async (req, res, next) => {
  try {
    // extract email and password from request body
    const { email, password } = req.body;

    //hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create a new user document with hash password
    const user = new User({ email, password: hashedPassword });

    // save the user document to the database
    await user.save();

    // responce
    res.status(201).json({
      email: user.email,
      message: "user register successfully",
      success: true,
      statusCode: 201,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "user registration failed",
      success: false,
      statusCode: 500,
    });
  }
};

// controller for user login
export const login = async (req, res) => {
  try {
    // extract email and password from request body
    const { email, password } = req.body;

    // find user by email in database
    const user = await User.findOne({ email });
    const userEmail = user.email;

    // if no user found, return an error
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // compare provided password with the stored hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: "invalid password" });
    }

    // generate a JSON web Token for authentation

    const token = jwt.sign({ userId: user._id }, "secret-keys", {
      expiresIn: "1h",
    });
    localStorage.setItem('token', token);

    //responce with success

    res.json({
      userEmail,
      message: "Login successful",
      token,
      success: true,
      statusCode: 200,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "login failed",
      success: false,
      statusCode: 500,
    });
  }
};

// controllers for change password
export const changePassword = async (req, res) => {
  const { email, currentPassword, newPassword } = req.body;

  try {
    if (!email || !currentPassword || !newPassword) {
      return res.status(400).json({
        success: false,
        message: "Please provide all fields to update your account.",
      });
    }
    // find email in DB
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "no user found against this email",
      });
    }
    // check if old and new passwords are same or not
    const isPasswordValid = await bcrypt.compare(
      currentPassword,
      user.password
    );
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "current password is incorrect",
      });
    }

    // hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    //update the new password
    user.password = hashedPassword;
    await user.save();

    return res.status(200).json({
      success: true,
      message: "your password has been updated successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const resetToken = crypto.randomBytes(20).toString("hex");
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 360000;

    console.log("Reset Token:", resetToken);
    await user.save();

    // send an email to the user with the reset token
    //nodemailer

    res.json({
      email: user.email,
      message: "Your password reset token sent to your mail",
    });
  } catch (error) {
    res.status(500).json({
      error: "forgot password request failed",
    });
  }
};
