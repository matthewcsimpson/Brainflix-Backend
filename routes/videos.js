const express = require("express");
const router = express.Router();
const fs = require("fs");
const { v4: uuid4 } = require("uuid");

/**
 * Load the video list from the JSON file.
 * @param {function} callback
 */
const loadVideos = (callback) => {
  fs.readFile("./data/videos.json", "utf8", callback);
};

/**
 * Write the videos list back to the JSON file.
 * @param {function} callback
 */
const writeVideos = (callback) => {
  fs.writeFile("./data/videos.json", callback, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.info(
        loadVideos((err, data) => {
          if (err) {
            console.error(err);
          }
        })
      );
    }
  });
};

/**
 * GET endpoint to return a simplified list of videos
 */
router.get("/", (req, res) => {
  loadVideos((err, data) => {
    if (err) {
      console.error(err);
      res.send(err);
    } else {
      const videoList = JSON.parse(data);
      res.json(
        videoList.map((vid) => {
          return {
            id: vid.id,
            title: vid.title,
            channel: vid.channel,
            image: vid.image,
          };
        })
      );
    }
  });
});

/**
 * GET endpoint to return the full details for a specific video.
 */
router.get("/:id", (req, res) => {
  loadVideos((err, data) => {
    if (err) {
      console.error(err);
      res.send("error finding the video!");
    } else {
      const videoList = JSON.parse(data);
      res.json(videoList.find((vid) => vid.id === req.params.id));
    }
  });
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
  loadVideos((err, data) => {
    if (err) {
      console.error(err);
    } else {
      const videoList = JSON.parse(data);
      videoList.push(newVideo);
      writeVideos(JSON.stringify(videoList));
      res.status(201).json(newVideo);
    }
  });
});

router.post("/:id/comments", (req, res) => {
  const newComment = {
    id: uuid4(),
    name: "Testing Testerson III",
    comment: req.body.comment,
    likes: 0,
    timestamp: req.body.timestamp,
  };

  loadVideos((err, data) => {
    if (err) {
      console.error(err);
    } else {
      const videoList = JSON.parse(data);
      const temp = videoList.find((vid) => vid.id === req.body.videoid);
      console.log(temp.comments);
      temp.comments.push(newComment);
      console.log(temp.comments);
    }
  });
});

module.exports = router;
