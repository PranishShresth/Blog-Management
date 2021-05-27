const Blog = require("../../models/blog.model");

module.exports = {
  async postBlog(req, res) {
    try {
      const blogExist = Blog.find({ title: req.body.title });
      if (blogExist) {
        return res
          .status(400)
          .json({ msg: "Blog with the title already exists" });
      }

      const newBlog = new Blog({ ...req.body });
      await newBlog.save();
      return res.status(201).json(newBlog);
    } catch (err) {
      res.status(500).json({ msg: "Internal Server Error" });
    }
  },

  async getAllBlogs(req, res) {
    try {
      const blogs = await Blog.find({}, { content: 0 });
      return res.status(200).json(blogs);
    } catch (err) {
      res.status(500).json({ msg: "Internal Server Error" });
    }
  },

  async updateBlog(req, res) {
    try {
    } catch (err) {}
  },
};
