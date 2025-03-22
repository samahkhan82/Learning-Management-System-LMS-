const Progress = require("../models/Progress");

const trackProgress = async (req, res) => {
  const { student, course, modulesCompleted, quizScores } = req.body;

  let progress = await Progress.findOne({ student, course });
  if (progress) {
    progress.modulesCompleted = modulesCompleted;
    progress.quizScores = quizScores;
    await progress.save();
  } else {
    progress = new Progress({ student, course, modulesCompleted, quizScores });
    await progress.save();
  }

  res.json(progress);
};

const getStudentProgress = async (req, res) => {
  const progress = await Progress.find({
    student: req.params.studentId,
  }).populate("course");
  res.json(progress);
};

module.exports = { trackProgress, getStudentProgress };
