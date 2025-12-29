const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

router.post("/", async (req, res) => {
  try {
    const { name, phone, email, message } = req.body;

    // 1. Create Database Entry
    const newContact = new Contact({
      name,
      phone,
      email,
      message,
    });

    // 2. Save to MongoDB
    await newContact.save();

    // 3. Log Success to Terminal
    console.log("------------------------------------------------");
    console.log("📩 NEW CONTACT MESSAGE SAVED");
    console.log(`👤 Name: ${name}`);
    console.log("------------------------------------------------");

    res.status(201).json({ message: "Message saved successfully!" });
  } catch (error) {
    console.error("❌ Contact Error:", error.message);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
