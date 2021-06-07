const Review = require("../models/reviews.model");

module.exports = {
  async postReview(req, res) {
    try {
      const { content, blog } = req.body;
      if (!content) {
        return res.status(400).json({ msg: "No content Provided" });
      }
      const review = new Review({ blog, author: req.user._id, content });
      await review.save();
    } catch (err) {
      return res.status(500).json({ msg: "Internal Server Error" });
    }
  },

  async getReviews(req, res) {
    try {
      const { blogId } = req.params;
      const review = Review.find({ blog: blogId });
      return res.staus(200).json({ review });
    } catch (err) {
      return res.status(500).json({ msg: "Internal Server Error" });
    }
  },
};
