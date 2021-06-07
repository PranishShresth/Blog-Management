const Review = require("../models/reviews.model");

module.exports = {
  async postReview(req, res) {
    try {
      const { content, blog } = req.body;

      if (!content) {
        return res.status(400).json({ msg: "No content Provided" });
      }
      const review = new Review({ blog, author: req.user.id, content });
      const newReview = await review.save();
      return res.status(200).json({ review: newReview });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: "Internal Server Error" });
    }
  },

  async getReviews(req, res) {
    try {
      const { blogId } = req.params;
      const reviews = await Review.find({ blog: blogId })
        .populate("author", { username: 1 })
        .exec();
      return res.status(200).json({ reviews });
    } catch (err) {
      return res.status(500).json({ msg: "Internal Server Error" });
    }
  },
};
