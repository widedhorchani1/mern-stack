const express = require("express");
const router = express.Router();
const Comment = require("../models/Comment");

router.get("/:postId", async (req, res) => {
  try {
    const comments = await Comment.find({ post: req.params.postId });
    res.json(comments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
