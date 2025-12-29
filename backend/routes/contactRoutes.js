const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// 1. POST: Save new message (Used by Contact Form)
router.post("/", async (req, res) => {
  try {
    const { name, phone, email, message } = req.body;
    const newContact = new Contact({ name, phone, email, message });
    await newContact.save();

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

// 2. GET: Fetch all messages (Used by Admin Dashboard)
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ _id: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
