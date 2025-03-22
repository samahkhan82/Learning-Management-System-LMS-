const PDFDocument = require("pdfkit");
const fs = require("fs");
const path = require("path");

const generateCertificatePDF = (student, course) => {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument();
    const certificatePath = path.join(
      __dirname,
      `../uploads/certificate-${Date.now()}.pdf`
    );

    doc.pipe(fs.createWriteStream(certificatePath));

    doc.fontSize(25).text("Certificate of Completion", { align: "center" });
    doc.moveDown();
    doc.fontSize(20).text(`Awarded to: ${student}`, { align: "center" });
    doc.moveDown();
    doc
      .fontSize(18)
      .text(`For successfully completing the course: ${course}`, {
        align: "center",
      });

    doc.end();
    resolve(certificatePath);
  });
};

module.exports = { generateCertificatePDF };
