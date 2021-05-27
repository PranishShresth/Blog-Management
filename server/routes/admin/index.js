const express = require("express");
const router = express.Router();
const blogController = require("../../controller/admin/blog.controller");
const authController = require("../../controller/admin/auth.controller");
const authMiddleware = require("../../config/middleware/auth");
const adminMiddleware = require("../../config/middleware/admin");

// auth
router.post("/auth/login", authController.login);
router.post("/auth/register", authController.register);

// blogs

router.post("/blog", authMiddleware, adminMiddleware, blogController.postBlog);
router.get(
  "/blog",
  authMiddleware,
  adminMiddleware,
  blogController.getAllBlogs
);
router.put(
  "/blog/:blogId",
  authMiddleware,
  adminMiddleware,
  blogController.updateBlog
);
router.delete(
  "/blog/:blogId",
  authMiddleware,
  adminMiddleware,
  blogController.deleteBlog
);

module.exports = router;
