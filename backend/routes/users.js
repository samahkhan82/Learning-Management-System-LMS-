const express = require("express");
const User = require("../models/User");
const verifyToken = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

const router = express.Router();

router.get("/", verifyToken, roleMiddleware(["Admin"]), async (req, res) => {
  const users = await User.find();
  res.json(users);
});

router.get("/:id", verifyToken, async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});

router.put("/:id", verifyToken, async (req, res) => {
  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updatedUser);
});

router.delete(
  "/:id",
  verifyToken,
  roleMiddleware(["Admin"]),
  async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted successfully" });
  }
);

module.exports = router;
