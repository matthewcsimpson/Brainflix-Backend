const fs = require("fs");

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
      loadVideos((err, _data) => {
        if (err) {
          console.error("load video error", err);
        }
      });
    }
  });
};

module.exports = { loadVideos, writeVideos };
