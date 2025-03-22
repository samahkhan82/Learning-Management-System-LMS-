const express = require("express");
const {
  issueCertificate,
  getCertificatesByStudent,
} = require("../controllers/certificateController");
const verifyToken = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", verifyToken, issueCertificate);
router.get("/:studentId", verifyToken, getCertificatesByStudent);

module.exports = router;
