const express = require("express");
const router = express.Router();
const { v4: uuid4 } = require("uuid");

const {getAllVideos, getVideoById} = require('../controllers/videoControllers')

/**
 * GET endpoint to return a simplified list of videos
 */
router.get("/", getAllVideos);

/**
 * GET endpoint to return the full details for a specific video.
 */
router.get("/:id", getVideoById);

/**
 * POST endpoint to add a new video to the list.
 */
router.post("/", );

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

      console.log(
        videoList
          .find((vid) => vid.id === req.body.videoid)
          .comments.push(newComment)
      );

      writeVideos(JSON.stringify(videoList));
      res.status(201).json(newComment);
    }
  });
});

module.exports = router;
