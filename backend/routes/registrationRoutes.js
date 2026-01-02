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
      // Defaults from Model: assignedTo, status, appointment, assignedClass, paidMonths, paymentMethod
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
// 6. ASSIGN CLASS TO STUDENT
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

// ==================================================================
// 7. UPDATE PAYMENT INFO (Method & Months Checklist)
// ==================================================================
router.put("/:id/payment", async (req, res) => {
  try {
    const { paymentMethod, paidMonths } = req.body;

    // Build update object dynamically to allow updating fields individually
    const updateData = {};
    if (paymentMethod !== undefined) updateData.paymentMethod = paymentMethod;
    if (paidMonths !== undefined) updateData.paidMonths = paidMonths;

    const updatedReg = await Registration.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    res.json({ success: true, registration: updatedReg });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
