const mongoose = require("mongoose");
const { MONGO_URI } = require("./keys");

async function dbConnect() {
  try {
    await mongoose.connect(MONGO_URI, {
      useUnifiedTopology: true,
      useCreateIndex: true,
      useNewUrlParser: true,
    });

    console.log("DB connected");
  } catch {
    process.exit(1);
  }
}

module.exports = dbConnect;
