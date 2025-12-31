const mongoose = require("mongoose");

const ClassSchema = new mongoose.Schema({
  name: { type: String, required: true }, // e.g., "A1 - Lundi Matin"
  professor: { type: String, required: true }, // e.g., "Mr. Alaoui"
  schedule: { type: String, default: "" }, // e.g., "10h00 - 12h00"
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Class", ClassSchema);
