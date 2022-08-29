# Matthew Simpson - BrainFlix Project - BrainStation Summer 2022

## Sprint 3 - Back End

API Server - Functional Requirements

- The end-points and response structure of your API server must match that of the mock API server.
- The API must have the following end-points:
  - `GET` `/videos` that responds with an array of videos.
  - `GET` `/videos/:id` that responds with an object containing the details of the video with an id of :id.
  - `POST` `/videos` that will add a new video to the video list. A unique id must be generated for each video added.
- Submitting a new video from the form must POST to the API. There is no requirement for a user to upload the image, therefore you as the developer must provide the hard-coded image path for the video thumbnail on the front-end during the form submission within the request body.
- Images should be served as static assets from the Node server.
  - Including the image used for creating a new video via Upload Form
- The data should persist on the server. If you restart Node server, the data shouldn't reset. This means you need to use a JSON file for persistence, writing to it, and reading from it.
- You should have a single source of truth for your data. Only one JSON file should be used to store all the data on your server.
  - Since you are now creating your own REST API, you now have to think about how you will use your one data file to mimic the API response from Sprint 2. One endpoint will return a small amount of data for each video that exists, the second endpoint will return all the data for one specific video. Think about how you may use your data file to achieve this within your project.

### Implementation Requirements

- Your project must follow the proper folder structure and naming convention outlined in the Project Guidelines section in Synapse and the Sprint 3 folder Structure Diagram.

![Structure](BrainFlix-S3-Structure.png)
