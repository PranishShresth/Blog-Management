const express = require("express");
const router = express.Router();
const authController = require("../controller/auth.controller");
const { validateSignUp, validateSignin } = require("../utils/validators.utils");

router.post("/auth/register", validateSignUp, authController.register);
router.post("/auth/login", validateSignin, authController.login);

module.exports = router;
