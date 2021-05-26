const express = require("express");
const router = express.Router();
const authController = require("../controller/auth.controller");
const { validateSignUp } = require("../utils/validators.utils");

router.post("/auth/login", validateSignUp, authController.register);

module.exports = router;
