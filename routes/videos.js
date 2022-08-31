const express = require("express");
const router = express.Router();
const fs = require("fs");
const { v4: uuid4 } = require("uuid");

const videos = require("../data/videos.json");

/**
 * GET endpoint to return a simplified list of videos
 */
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

/**
 * GET endpoint to return the full details for a specific video.
 */
router.get("/:id", (req, res) => {
  res.json(videos.find((vid) => vid.id === req.params.id));
});

/**
 * POST endpoint to add a new video to the list.
 */
router.post("/", (req, res) => {
  const { title, description } = req.body;
  const newVideo = {
    id: uuid4(),
    title: title,
    channel: "Shiny New Channel",
    image: "http://localhost:8888/images/placeholder.jpg",
    description: description,
    views: 0,
    likes: 0,
    duration: 0,
    video: "https://project-2-api.herokuapp.com/stream",
    timestamp: Date.now(),
    comments: [],
  };
  res.json(newVideo);
});

module.exports = router;
