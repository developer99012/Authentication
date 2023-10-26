const mongoose = require("mongoose");

const user = { fullname: "", email: "", password: "", avatar: "" };

const userSchema = mongoose.Schema({
  fullname: { type: String, required: true },
  email: { type: String,required: true },
  password: { type: String,required: true },
//   avatar: Buffer
});

module.exports = mongoose.model('User', userSchema)
