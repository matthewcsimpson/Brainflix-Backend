// imports
const express = require("express");
const app = express();
const cors = require("cors");

const PORT = process.env.PORT || 8080

// video routes
const videos = require("./routes/videos");

// set responses in json, public folder
app.use(express.json());
app.use(express.static("public"));
app.use(cors());

// console log all requests
app.use((req, _res, next) => {
  console.info(`Incoming request from ${req.originalUrl}`);
  next();
});

// get the main page
app.get("/", (_req, res) => {
  res.send("The Server is Running");
});

app.use("/videos", videos);

app.listen(PORT, () => {
  console.info(`Server running on port ${8888}`);
});
