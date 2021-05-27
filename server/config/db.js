const mongoose = require("mongoose");
const { MONGO_URI } = require("./keys");

async function dbConnect() {
  try {
    mongoose.connect(MONGO_URI, {
      useUnifiedTopology: true,
      useCreateIndex: true,
      useNewUrlParser: true,
    });
  } catch {
    process.exit(1);
  }
}

module.exports = dbConnect;
