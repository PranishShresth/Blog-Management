const jwt = require("jsonwebtoken");
const config = require("../config/keys");

const createAccessToken = (user, expiresIn = "1h") => {
  return jwt.sign(user, config.JWT_SECRET, { expiresIn });
};

module.exports = { createAccessToken };
