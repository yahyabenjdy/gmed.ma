const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// Initialize App
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Allows the server to accept JSON data

// ----------------------------------------------------
// DATABASE CONNECTION
// ----------------------------------------------------
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err.message);
    console.log("👉 Tip: Check your IP Whitelist in MongoDB Atlas!");
  });

// ----------------------------------------------------
// ROUTES
// ----------------------------------------------------

// 1. Registration Route (For Student Application Form)
const registrationRoutes = require("./routes/registrationRoutes");
app.use("/api/register", registrationRoutes);

// 2. Contact Route (For Homepage Contact Form)
const contactRoutes = require("./routes/contactRoutes");
app.use("/api/contact", contactRoutes);

// ----------------------------------------------------
// START SERVER
// ----------------------------------------------------
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
