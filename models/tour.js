const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  price: Number,
  image: String,
  category: {
    type: String,
    enum: ["India", "International"],
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model("Tour", tourSchema);
