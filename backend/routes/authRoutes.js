const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");

// SECRET KEY (Should match the one used during login)
const JWT_SECRET = "gmed_secret_key_2025";

// 1. LOGIN ROUTE
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const admin = await Admin.findOne({ email });
    if (!admin)
      return res.status(400).json({ message: "Invalid Email or Password" });

    // Check password
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid Email or Password" });

    // Create Token
    const token = jwt.sign(
      { id: admin._id, role: admin.role, name: admin.name },
      JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({
      token,
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
        role: admin.role,
      },
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 2. CREATE NEW ADMIN (Super Admin Only)
router.post("/create", async (req, res) => {
  try {
    const { name, email, password, role, creatorRole } = req.body;

    if (creatorRole !== "superadmin") {
      return res
        .status(403)
        .json({ message: "Access Denied: Only Super Admin can create users." });
    }

    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin)
      return res.status(400).json({ message: "Email already exists" });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newAdmin = new Admin({
      name,
      email,
      password: hashedPassword,
      role: role || "admin",
    });

    await newAdmin.save();
    res.status(201).json({ message: "New Admin Created Successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 3. GET ALL ADMINS
router.get("/", async (req, res) => {
  try {
    const admins = await Admin.find().select("-password");
    res.json(admins);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 4. DELETE ADMIN (Super Admin Only)
router.delete("/:id", async (req, res) => {
  try {
    await Admin.findByIdAndDelete(req.params.id);
    res.json({ message: "Admin deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 5. UPDATE PASSWORD (Super Admin Only) - NEW FEATURE
router.put("/:id", async (req, res) => {
  try {
    const { password, creatorRole } = req.body;

    // Security: Only Super Admin can reset passwords
    if (creatorRole !== "superadmin") {
      return res.status(403).json({ message: "Access Denied" });
    }

    // Encrypt the NEW password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Update the user in the database
    await Admin.findByIdAndUpdate(req.params.id, { password: hashedPassword });

    res.json({ message: "Password updated successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
