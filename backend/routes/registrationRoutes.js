const express = require("express");
const router = express.Router();
const Registration = require("../models/Registration");

router.post("/", async (req, res) => {
  try {
    const { name, phone, role, level, message } = req.body;

    // 1. Create Database Entry
    const newRegistration = new Registration({
      name,
      phone,
      role,
      level,
      message,
    });

    // 2. Save to MongoDB
    await newRegistration.save();

    // 3. Log Success to Terminal (for you to see)
    console.log("------------------------------------------------");
    console.log("✅ NEW REGISTRATION SAVED");
    console.log(`👤 Name: ${name}`);
    console.log(`📚 Role: ${role}`);
    console.log("------------------------------------------------");

    // 4. Send Success Response to Frontend
    res.status(201).json({ message: "Registration saved successfully!" });
  } catch (error) {
    console.error("❌ Database Error:", error.message);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
