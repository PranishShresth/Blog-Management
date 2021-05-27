const admin = (req, res, next) => {
  const { role } = req.user;
  if (role !== "admin") {
    return res.status(401).json({ msg: "Not authorized" });
  }
  next();
};

module.exports = admin;
