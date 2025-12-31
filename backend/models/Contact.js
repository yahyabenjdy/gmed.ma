const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  message: { type: String, required: true },
  // 👇 NEW FIELD
  assignedTo: { type: String, default: null },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Contact", ContactSchema);
