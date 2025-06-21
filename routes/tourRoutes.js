const express = require("express");
const router = express.Router();
const {
  createTour,
  getTours,
  updateTour,
  deleteTour
} = require("../controllers/tourController");

// Optional: protect with middleware if login is needed

// CRUD routes
router.post("/", createTour);         // Create tour
router.get("/", getTours);            // Get all tours
router.put("/:id", updateTour);       // Update by ID
router.delete("/:id", deleteTour);    // Delete by ID

module.exports = router;
