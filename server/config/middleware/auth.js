const jwt = require("jsonwebtoken");
const config = require("../keys");

const auth = (req, res, next) => {
  const authorization = req.headers.authorization;

  //   Authorization "Bearer <token">
  if (authorization === null) {
    return res.status(401).json({ msg: "No authorization header" });
  }
  const token = authorization.split(" ")[1];
  if (token === undefined) {
    return res.status(401).json({ msg: "Token doesn't exist" });
  }
  jwt.verify(token, config.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(401).json({ msg: "Bad token" });
    }
    req.user = user;
    next();
  });
};
