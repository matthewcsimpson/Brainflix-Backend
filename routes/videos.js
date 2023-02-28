const express = require("express");
const router = express.Router();

const {
  getAllVideos,
  getVideoById,
  postNewVideo,
  postNewComment,
} = require("../controllers/videoControllers");

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
router.post("/", postNewVideo);

router.post("/:id/comments", postNewComment);

module.exports = router;
