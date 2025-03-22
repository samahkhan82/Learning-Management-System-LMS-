const Certificate = require("../models/Certificate");
const { generateCertificatePDF } = require("../utils/generateCertificate");

const issueCertificate = async (req, res) => {
  const { student, course } = req.body;

  const certificateUrl = await generateCertificatePDF(student, course);

  const newCertificate = new Certificate({ student, course, certificateUrl });
  await newCertificate.save();

  res.json({ message: "Certificate issued", certificateUrl });
};

const getCertificatesByStudent = async (req, res) => {
  const certificates = await Certificate.find({
    student: req.params.studentId,
  }).populate("course");
  res.json(certificates);
};

module.exports = { issueCertificate, getCertificatesByStudent };
