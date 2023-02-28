// Utlitiy Functions
const { loadVideos, writeVideos } = require("../utilities/readWriteUtils");

/**
 * FUNCTION to return list of all available videos.
 * @param {*} _req
 * @param {*} res
 */
const getAllVideos = (_req, res) => {
  loadVideos(function (err, data) {
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
};

/**
 * FUNCTION to return a specific video by its ID.
 * @param {*} req
 * @param {*} res
 */
const getVideoById = (req, res) => {
  loadVideos((err, data) => {
    if (err) {
      console.error(err);
      res.send("error finding the video!");
    } else {
      const videoList = JSON.parse(data);
      res.json(videoList.find((vid) => vid.id === req.params.id));
    }
  });
};

/**
 * FUNCTION to post a new video. 
 * @param {*} req 
 * @param {*} res 
 */
const postNewVideo = (req, res) => {
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
  }

module.exports = { getAllVideos, getVideoById };
