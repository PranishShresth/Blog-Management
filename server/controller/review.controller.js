const Review = require("../models/reviews.model");

module.exports = {
  postReview(req, res) {
    try {
      const { content, blog } = req.body;
      if (!content) {
        return res.status(400).json({ msg: "No content Provided" });
      }
      const review = new Review({ blog, author: req.user._id, content });
      await review.save();
    } catch (err) {}
  },
};
