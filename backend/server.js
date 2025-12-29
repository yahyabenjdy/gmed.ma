const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs"); // Needed for the auto-create logic
const Admin = require("./models/Admin"); // Needed to check if admins exist
require("dotenv").config();

// Initialize App
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// ----------------------------------------------------
// DATABASE CONNECTION & SUPER ADMIN SEEDING
// ----------------------------------------------------
mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("✅ MongoDB Connected");

    // --- AUTO-CREATE SUPER ADMIN ---
    // This runs every time the server starts.
    // It checks: "Are there any admins?"
    // If NO: It creates the default Master Account using .env variables.
    const adminCount = await Admin.countDocuments();
    if (adminCount === 0) {
      console.log("⚙️  No admins found. Creating Master Account...");

      const salt = await bcrypt.genSalt(10);

      // 👇 CHANGED: Uses .env variable instead of hardcoded string
      // Fallback to "gmed2025" if .env variable is missing
      const passwordToHash = process.env.DEFAULT_ADMIN_PASS || "gmed2025";
      const emailToUse = process.env.DEFAULT_ADMIN_EMAIL || "admin@gmed.ma";

      const hashedPassword = await bcrypt.hash(passwordToHash, salt);

      const newAdmin = new Admin({
        name: "Super Admin",
        email: emailToUse,
        password: hashedPassword,
        role: "superadmin",
      });

      await newAdmin.save();
      console.log(`👑 MASTER ACCOUNT CREATED: ${emailToUse}`);
    }
    // ----------------------------------
  })
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err.message);
  });

// ----------------------------------------------------
// ROUTES
// ----------------------------------------------------

const registrationRoutes = require("./routes/registrationRoutes");
const contactRoutes = require("./routes/contactRoutes");
const authRoutes = require("./routes/authRoutes");

app.use("/api/register", registrationRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/auth", authRoutes);

// ----------------------------------------------------
// START SERVER
// ----------------------------------------------------
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
