const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true }, // <--- THIS WAS MISSING!
  email: { type: String, required: false }, // Optional as requested
  subject: { type: String, required: false },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Contact", ContactSchema);
