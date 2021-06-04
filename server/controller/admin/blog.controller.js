const Blog = require("../../models/blog.model");

module.exports = {
  async postBlog(req, res) {
    try {
      const author = req.user;
      const blogExist = await Blog.findOne({ title: req.body.title });
      if (blogExist) {
        return res
          .status(400)
          .json({ msg: "Blog with the title already exists" });
      }

      const newBlog = new Blog({ ...req.body, author: author.id });
      await newBlog.save();
      return res.status(201).json({ blog: newBlog });
    } catch (err) {
      res.status(500).json({ msg: "Internal Server Error" });
    }
  },

  async getAllBlogs(req, res) {
    try {
      const blogs = await Blog.find({}, { content: 0 });
      return res.status(200).json({ blogs: blogs });
    } catch (err) {
      res.status(500).json({ msg: "Internal Server Error" });
    }
  },

  async updateBlog(req, res) {
    try {
      const { blogId } = req.params;
      const blog = await Blog.findOneAndUpdate(
        { _id: blogId },
        { $set: { ...req.body } },
        { $new: true }
      );
      return res.status(200).json(blog);
    } catch (err) {
      res.status(500).json({ msg: "Internal Server Error" });
    }
  },

  async deleteBlog(req, res) {
    try {
      const { blogId } = req.params;
      await Blog.findByIdAndDelete(blogId);
      return res.status(200).json({ msg: "Blog deleted" });
    } catch (err) {
      res.status(500).json({ msg: "Internal Server Error" });
    }
  },
};
