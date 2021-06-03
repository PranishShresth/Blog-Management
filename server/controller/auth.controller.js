const User = require("../models/user.model");
const { createAccessToken } = require("./../utils/auth.utils");
const sendEmailVerification = require("./../utils/email.util");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const config = require("../config/keys");

module.exports = {
  async register(req, res) {
    try {
      // validation logic
      const errors = await validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.array() });
      }
      // check if the user exist
      const userExists = await User.findOne({ email: req.body.email });
      if (userExists) {
        return res.status(401).json({ msg: "User already Exits" });
      }
      const newUser = new User({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
      });
      const user = await newUser.save();

      const payload = {
        id: user._id,
        user: user.username,
        email: user.email,
        role: user.role,
        isVerified: user.isVerified,
      };
      const token = createAccessToken(payload);
      sendEmailVerification(req.body.email, req.body.username, token);
      //   email logic

      return res.status(201).json({ user: payload, token });
    } catch (err) {
      return res.status(500).json({ msg: "Internal Server Error" });
    }
  },
  async login(req, res) {
    try {
      const errors = await validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.array() });
      }
      const user = await User.findOne({ email: req.body.email });
      if (user) {
        const isMatch = await user.comparePassword(req.body.password);
        if (isMatch) {
          const payload = {
            id: user._id,
            user: user.username,
            email: user.email,
            role: user.role,
            isVerified: user.isVerified,
          };
          const token = createAccessToken(payload);
          return res.status(200).json({ user: payload, token });
        }
        return res.status(401).json({ msg: "Invalid credentials" });
      }
      return res.status(401).json({ msg: "Invalid credentials" });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: "Internal Server Error" });
    }
  },

  async verifyUser(req, res) {
    try {
      const { token } = req.body;
      jwt.verify(token, config.JWT_SECRET, async (err, user) => {
        if (err) {
          return res.status(400).json({ msg: "Token not valid" });
        }
        if (user.isVerified) {
          return res.status(200).json({ msg: "User already verified" });
        }
        const userToVerify = await User.findByIdAndUpdate(
          user.id,
          {
            $set: { isVerified: true },
          },
          { $new: true }
        );

        const payload = {
          id: userToVerify._id,
          user: userToVerify.username,
          email: userToVerify.email,
          role: userToVerify.role,
          isVerified: userToVerify.isVerified,
        };
        const token = createAccessToken(payload);

        res.status(200).json({ user: payload, token });
      });
    } catch (err) {
      return res.status(500).json({ msg: "Internal Server Error" });
    }
  },

  fetchUser(req, res) {
    try {
      const user = req.user;
      res.status(200).json({ user });
    } catch (err) {
      return res.status(500).json({ msg: "Internal Server Error" });
    }
  },
};
