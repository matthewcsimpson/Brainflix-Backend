// imports
const express = require("express");
const app = express();

// video routes
const videos = require("./routes/videos");

// set responses in json, public folder
app.use(express.json());
app.use(express.static("public"));

// console log all requests
app.use((req, res, next) => {
  console.log(`Incoming request from ${req.originalUrl}`);
  next();
});

// get the main page
app.get("/", (req, res) => {
  res.send("I'm here, yo");
});

app.use("/videos", videos);

app.listen(8888, () => {
  console.log(`Server running on port ${8888}`);
});
