const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("./models/user.model");
require("dotenv").config();

const app = express();

(async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL || "mongodb://127.0.0.1:27017/crm");
    console.log("MongoDB connected");

    const user = await User.findOne({ userId: "admin" });

    if (!user) {
      console.log("Admin user not present, creating now...");

      const admin = await User.create({
        name: "om",
        userId: "admin",
        email: "omsingh8400@gmail.com",
        userType: "ADMIN", // ✅ make sure this is a string
        password: bcrypt.hashSync("welcome1", 8)
      });

      console.log("Admin created:", admin);
    } else {
      console.log("Admin user is already present!");
    }
  } catch (err) {
    console.error("Error:", err);
  }
})();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server started running on port number: ${PORT}`);
});
