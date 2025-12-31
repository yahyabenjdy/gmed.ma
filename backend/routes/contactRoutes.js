const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// 1. CREATE NEW MESSAGE (Public Contact Form)
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    const newContact = new Contact({
      name,
      email,
      phone,
      message,
    });

    await newContact.save();
    res.status(201).json({ message: "Message sent successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 2. GET ALL MESSAGES (Admin Dashboard)
router.get("/", async (req, res) => {
  try {
    // Sort by newest first
    const contacts = await Contact.find().sort({ date: -1 });
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 3. ASSIGN ADMIN TO MESSAGE (New Feature)
router.put("/:id/assign", async (req, res) => {
  try {
    const { adminName } = req.body; // Can be a name string or null

    const updatedContact = await Contact.findByIdAndUpdate(
      req.params.id,
      { assignedTo: adminName },
      { new: true }
    );

    res.json({ success: true, contact: updatedContact });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
