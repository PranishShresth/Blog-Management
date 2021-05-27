const User = require("../../models/user.model");
const { createAccessToken } = require("./../../utils/auth.utils");
const sendEmailVerification = require("./../../utils/email.util");
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
        role: "admin",
      });
      const user = await newUser.save();

      const payload = {
        user: user.username,
        id: user._id,

        email: user.email,
        role: user.role,
        isVerified: user.isVerified,
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
};
