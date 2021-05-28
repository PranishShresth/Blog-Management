const express = require("express");
const router = express.Router();
const authController = require("../controller/auth.controller");
const blogController = require("../controller/blog.controller");
const { validateSignUp, validateSignin } = require("../utils/validators.utils");

router.post("/auth/register", validateSignUp, authController.register);
router.post("/auth/login", validateSignin, authController.login);

// blogs

router.get("/blogs", blogController.paginatedBlogs);
router.get("/blog/:blogId", blogController.getSpecificBlog);

module.exports = router;
