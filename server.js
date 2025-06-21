const express = require("express");
const session = require("express-session");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/dbconnection");
const tourRoutes = require("./routes/tourRoutes");

dotenv.config();
const app = express();

connectDB();

// CORS
app.use(cors({
  origin: "http://127.0.0.1:5503",
  credentials: true
}));

// Session
app.use(session({
  secret: "admin_secret_key",
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    httpOnly: true,
    sameSite: "lax"
  }
}));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// server.js
const authRoutes = require("./routes/adminAuth");
app.use("/api/auth", authRoutes); // 👈 This enables /api/auth/login

//tours
app.use("/api/tours", tourRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
