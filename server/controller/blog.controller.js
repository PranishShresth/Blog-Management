const Blog = require("../models/blog.model");
const { getAllBlogs } = require("./admin/blog.controller");

module.exports = {
  /**
   *
   * @route /api/blog
   */
  async getPublishedBlogs(req, res) {
    try {
      const blogs = await Blog.find({ isPublished: true });
      return res.status(200).json(blogs);
    } catch (err) {
      return res.status(500).json("Internal Server Error");
    }
  },

  async paginatedBlogs(req, res) {
    try {
      const { per_page, page, sort } = req.query;
      const sortOrder = sort === "DESC" ? -1 : 1;
      const totalBlogs = await Blog.find({
        isPublished: true,
      }).countDocuments();
      const blogs = await Blog.find({ isPublished: true }, { content: 0 })
        .limit(Number(per_page) || 5)
        .skip(Number(page - 1) * Number(per_page))
        .sort({ createdAt: sortOrder })
        .exec();

      return res.status(200).json({ blogs, totalBlogs });
    } catch (err) {
      return res.status(500).json({ msg: "Internal Server Error" });
    }
  },

  async getSpecificBlog(req, res) {
    try {
      const { blogId } = req.params;
      const blog = await Blog.findById(blogId);
      return res.status(200).json(blog);
    } catch (err) {
      return res.status(500).json({ msg: "Internal Server Error" });
    }
  },
};
