const express = require("express");
const app = express();
require("dotenv").config();

require("./models/db");

const User = require("./models/users");

app.get("/register", async (req,res) => {
  const user = await User({
    fullname: "naneeta",
    email: "naneeta1@gmail.com",
    password: "12345676",   
  });
  await user.save();
  console.log("🚀 ~ file: index.js:17 ~ app.get ~ user:", user)
  res.json(user);
  res.end()
});

app.get("/", (req, res) => {
  console.log("GET request received");
  res.json({ name: "Naneeta" });

  res.end();
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
