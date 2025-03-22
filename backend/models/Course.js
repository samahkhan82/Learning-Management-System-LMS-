const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String,
  materials: [String],
  instructor: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  studentsEnrolled: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

module.exports = mongoose.model("Course", courseSchema);
