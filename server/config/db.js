const mongoose = require("mongoose");
const { MONGO_URI } = require("./keys");

async function dbConnect() {
  try {
    mongoose.connect(MONGO_URI, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch {
    process.exit(1);
  }
}

module.exports = dbConnect;
