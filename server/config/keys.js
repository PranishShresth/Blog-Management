"use strict";

require("dotenv").config();

if (process.env.NODE_ENV === "production") {
  module.exports = {
    MONGO_URI: process.env.MONGO_URI,
    JWT_SECRET: process.env.JWT_SECRET,
  };
} else {
  module.exports = {
    MONGO_URI: process.env.MONGO_DEV_URI,
    JWT_SECRET: process.env.JWT_SECRET,
  };
}
