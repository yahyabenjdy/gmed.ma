const express = require("express");
const router = express.Router();
const Registration = require("../models/Registration");

// ==================================================================
// 1. CREATE NEW REGISTRATION (Public Form)
// ==================================================================
router.post("/", async (req, res) => {
  try {
    const { name, phone, city, role, level } = req.body;

    const newRegistration = new Registration({
      name,
      phone,
      city,
      role,
      level,
      // Defaults from Model: assignedTo, status, appointment, assignedClass
    });

    await newRegistration.save();
    res.status(201).json({ message: "Registration successful" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ==================================================================
// 2. GET ALL REGISTRATIONS (Admin Dashboard)
// ==================================================================
router.get("/", async (req, res) => {
  try {
    // Return all registrations sorted by newest first
    const registrations = await Registration.find().sort({ date: -1 });
    res.json(registrations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ==================================================================
// 3. ASSIGN ADMIN TO REGISTRATION
// ==================================================================
router.put("/:id/assign", async (req, res) => {
  try {
    const { adminName } = req.body; // Expects a string name or null

    const updatedReg = await Registration.findByIdAndUpdate(
      req.params.id,
      { assignedTo: adminName },
      { new: true }
    );

    res.json({ success: true, registration: updatedReg });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ==================================================================
// 4. UPDATE REGISTRATION STATUS (CRM Feature)
// ==================================================================
router.put("/:id/status", async (req, res) => {
  try {
    const { status } = req.body;

    const updatedReg = await Registration.findByIdAndUpdate(
      req.params.id,
      { status: status },
      { new: true }
    );

    res.json({ success: true, registration: updatedReg });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ==================================================================
// 5. UPDATE APPOINTMENT (Rendez-vous Feature)
// ==================================================================
router.put("/:id/appointment", async (req, res) => {
  try {
    const { date, note } = req.body;

    const updatedReg = await Registration.findByIdAndUpdate(
      req.params.id,
      { appointment: { date, note } },
      { new: true }
    );

    res.json({ success: true, registration: updatedReg });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ==================================================================
// 6. ASSIGN CLASS TO STUDENT (New Feature)
// ==================================================================
router.put("/:id/class", async (req, res) => {
  try {
    const { classId } = req.body; // Can be null (to unassign) or an ObjectId string

    const updatedReg = await Registration.findByIdAndUpdate(
      req.params.id,
      { assignedClass: classId },
      { new: true }
    );

    res.json({ success: true, registration: updatedReg });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
