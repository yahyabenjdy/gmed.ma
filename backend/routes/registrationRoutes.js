const express = require("express");
const router = express.Router();
const Registration = require("../models/Registration");

// 1. POST: Save new student (Used by the Registration Form)
router.post("/", async (req, res) => {
  try {
    const { name, phone, role, level, message } = req.body;
    const newRegistration = new Registration({
      name,
      phone,
      role,
      level,
      message,
    });
    await newRegistration.save();

    console.log("------------------------------------------------");
    console.log("✅ NEW REGISTRATION SAVED");
    console.log(`👤 Name: ${name}`);
    console.log("------------------------------------------------");

    res.status(201).json({ message: "Registration saved successfully!" });
  } catch (error) {
    console.error("❌ Database Error:", error.message);
    res.status(500).json({ message: "Server Error" });
  }
});

// 2. GET: Fetch all students (Used by Admin Dashboard)
router.get("/", async (req, res) => {
  try {
    // .find() gets everything
    // .sort({ _id: -1 }) puts the newest ones at the top
    const registrations = await Registration.find().sort({ _id: -1 });
    res.json(registrations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
