const express = require("express");
const router = express.Router();
const Class = require("../models/Class");
const Registration = require("../models/Registration");

// GET ALL CLASSES
router.get("/", async (req, res) => {
  try {
    const classes = await Class.find();
    res.json(classes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// CREATE CLASS
router.post("/", async (req, res) => {
  try {
    const newClass = new Class(req.body);
    await newClass.save();
    res.status(201).json(newClass);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE CLASS
router.delete("/:id", async (req, res) => {
  try {
    await Class.findByIdAndDelete(req.params.id);
    // Remove this class assignment from any students
    await Registration.updateMany(
      { assignedClass: req.params.id },
      { assignedClass: null }
    );
    res.json({ message: "Class deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
