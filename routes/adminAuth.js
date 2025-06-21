const express = require("express");
const router = express.Router();
const credentials = require("../credentials");

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === credentials.email && password === credentials.password) {
    req.session.admin = true;
    return res.json({ success: true, message: "Logged in successfully" });
  }

  res.status(401).json({ success: false, message: "Invalid credentials" });
});

router.get("/logout", (req, res) => {
  req.session.destroy();
  res.json({ success: true, message: "Logged out successfully" });
});



module.exports = router;
