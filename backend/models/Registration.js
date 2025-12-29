const mongoose = require("mongoose");

const RegistrationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  role: { type: String, required: true },
  level: { type: String, required: true },
  message: { type: String },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Registration", RegistrationSchema);
