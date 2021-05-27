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
    isVerified: {
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

userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    const saltRounds = await bcrypt.genSalt(10);
    let hashpassword = await bcrypt.hash(user.password, saltRounds);
    user.password = hashpassword;
    next();
  }
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

userSchema.index({ email: 1 });
const User = mongoose.model("User", userSchema);

module.exports = User;
