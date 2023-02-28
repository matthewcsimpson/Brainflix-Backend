## BrainFlix - Full Stack Video Site - Back End

Completed during my time as a student at BrainStation, BrainFlix is a full-stack video player app modelled after Vimeo.

The front end is created with React.js and uses React Router, Axios, DotEnv, as well as HTML, Sass/CSS3 with BEM. The back end is created with Node.js, Express.js, and JSON files.

A user can leave comments on the existing videos and simulate uploading a new video. The site is designed responsively with breakpoints set for mobile, tablet, and desktop viewport sizes.

Be sure to also [check out the front end repository](https://github.com/matthewcsimpson/Brainflix-Frontend). 

### Endpoints:

#### GET list of videos

```http
  GET /videos
```

#### GET a specific video

```http
  GET /videos/:id
```

| Parameter  | Type     | Description                       |
| :--------- | :------- | :-------------------------------- |
| `id ` | `number` | **Required**. Id of video to fetch |

#### POST a comment to video

```http
  POST /videos/:id/comments
```

| Parameter  | Type     | Description                       |
| :--------- | :------- | :-------------------------------- |
| `id ` | `number` | **Required**. Id of video of which to attach a comment |


#### POST a new video

```http
  POST /videos/
```

