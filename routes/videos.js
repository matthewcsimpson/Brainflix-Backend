const express = require("express");
const router = express.Router();


const videos = require("../data/videos.json");

router.get("/", (req, res) => {
  res.json(
    videos.map((vid) => {
      return {
        id: vid.id,
        title: vid.title,
        channel: vid.channel,
        image: vid.image,
      };
    })
  );
});

router.get("/:id", (req, res) => {
  res.json(videos.find((vid) => vid.id === req.params.id));
});

module.exports = router;
