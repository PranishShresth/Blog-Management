const User = require("../models/user.model");
const { createAccessToken } = require("./../utils/auth.utils");
const sendEmailVerification = require("./../utils/email.util");
const { validationResult } = require("express-validator");

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
        return res.status(403).json({ msg: "User already Exits" });
      }
      const newUser = new User({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
      });
      const user = await newUser.save();

      const payload = {
        user: user.username,
        email: user.email,
        role: user.role,
      };
      const token = createAccessToken(payload);
      sendEmailVerification(req.body.email, req.body.username, token);
      //   email logic

      return res.status(200).json({ user: payload, token });
    } catch (err) {
      return res.status(500).json({ msg: "Internal Server Error" });
    }
  },
  async login(req, res) {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (userExists) {
        const isMatch = await user.comparePassword(req.body.password);
      }
    } catch (err) {}
  },
};
