const { check } = require("express-validator");

const validateSignUp = [
  check("username")
    .notEmpty()
    .withMessage("The username should not be empty")
    .isString()
    .withMessage("The username should be string"),
  check("password")
    .notEmpty()
    .withMessage("The password should not be empty")
    .isLength({ min: 8 })
    .withMessage("The password should be 8 characters long")
    .custom((val, { req }) => {
      if (req.body.repeatPassword !== val) {
        throw new Error("The password doesn't match");
      }
      return true;
    }),
  check("email")
    .isEmail()
    .withMessage("The valid email is required")
    .normalizeEmail(),
];

const validateSignin = [
  check("email")
    .isEmail()
    .withMessage("The valid email is required")
    .normalizeEmail(),
];

module.exports = { validateSignUp, validateSignin };
