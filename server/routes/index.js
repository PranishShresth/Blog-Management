const express = require("express");
const router = express.Router();
const authController = require("../controller/auth.controller");
const blogController = require("../controller/blog.controller");
const { validateSignUp, validateSignin } = require("../utils/validators.utils");
const auth = require("../config/middleware/auth");

router.get("/auth/fetchUser", auth, authController.fetchUser);
router.post("/auth/register", validateSignUp, authController.register);
router.post("/auth/login", validateSignin, authController.login);
router.post("/auth/verify", authController.verifyUser);
// blogs

router.get("/blogs", blogController.paginatedBlogs);
router.get("/blog/:blogId", blogController.getSpecificBlog);

module.exports = router;
