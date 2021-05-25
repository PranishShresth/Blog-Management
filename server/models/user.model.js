const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 8,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    isEmailVerfied: {
      type: Boolean,
      default: false,
    },
    avatar: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

userSchema.pre("save", async function (next) {
  const user = this;
  const saltRounds = bcrypt.genSalt(10);
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, saltRounds);
  }
  next();
});

/**
 * @description Check if the password matches
 * @param {string} password
 * @returns {Promise<Boolean>}
 */
userSchema.methods.comparePassword = async function (password) {
  const user = this;
  const isSame = await bcrypt.compare(password, user.password);
  return isSame;
};

module.exports = User;
