const express = require("express");
const router = express.Router();

const videos = require("../data/videos.json");

router.get("/", (req, res) => {});

router.get("/:id", (req, res) => {
  res.json(videos.find((vid) => vid.id === req.params.id));

  console.log(req.params.id);
});

module.exports = router;
