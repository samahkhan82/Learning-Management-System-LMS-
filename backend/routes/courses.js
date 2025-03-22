const express = require("express");
const Course = require("../models/Course");

const router = express.Router();

router.get("/", async (req, res) => {
  const courses = await Course.find().populate("instructor");
  res.json(courses);
});

router.post("/", async (req, res) => {
  const newCourse = new Course(req.body);
  await newCourse.save();
  res.status(201).json(newCourse);
});

module.exports = router;
