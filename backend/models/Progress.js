const mongoose = require("mongoose");

const progressSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  course: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
  modulesCompleted: Number,
  quizScores: [Number],
});

module.exports = mongoose.model("Progress", progressSchema);
