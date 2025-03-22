const mongoose = require("mongoose");

const certificateSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  course: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
  dateIssued: { type: Date, default: Date.now },
  certificateUrl: String,
});

module.exports = mongoose.model("Certificate", certificateSchema);
