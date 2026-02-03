const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://localhost:27017/web-dev");
    console.log(`Connected to database`);
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1);
  }
};
 
module.exports = connectDB;
