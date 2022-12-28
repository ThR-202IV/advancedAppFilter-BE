const mongoose = require("mongoose");
const connStr = process.env.DATABASE_CONNECTION;

const connectDB = async () => {
  try {
    await mongoose.connect(connStr);
    console.log("DB connection: 👍");
  } catch (error) {
    console.log("DB connection: 👎");
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
