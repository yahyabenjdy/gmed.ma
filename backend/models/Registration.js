const mongoose = require("mongoose");

const RegistrationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  role: { type: String, required: true },
  level: { type: String, required: true },
  city: { type: String, default: "" },
  assignedTo: { type: String, default: null },
  status: { type: String, default: "Nouveau prospect" },
  appointment: {
    date: { type: Date, default: null },
    note: { type: String, default: "" },
  },
  assignedClass: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Class",
    default: null,
  },

  // 👇 NEW PAYMENT FIELDS
  paymentMethod: { type: String, default: "Cash" }, // 'Cash' or 'Online'
  paidMonths: { type: [String], default: [] }, // Stores list of paid months e.g. ["Jan", "Mar"]

  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Registration", RegistrationSchema);
