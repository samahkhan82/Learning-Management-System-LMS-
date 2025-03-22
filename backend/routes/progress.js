const express = require("express");
const {
  trackProgress,
  getStudentProgress,
} = require("../controllers/progressController");
const verifyToken = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", verifyToken, trackProgress);
router.get("/:studentId", verifyToken, getStudentProgress);

module.exports = router;
