# PhotoLabs by: Abdul Syed
<img src='./projectImages/memoriesText.png' />

#### This is a web application for posting and sharing memories. It allows users to create, edit, and delete memories by uploading images, adding captions, and tags. The application features user authentication and authorization using JSON Web Tokens (JWTs) and the bcrypt library for password hashing.

## Features
- Users can login and create a post
- Users can like a post
- Users can edit THEIR own posts
- Users can search through tags with search bar
- Users can search through memories to access a specific image
- Users can see pages of images with Pagination

## Interface
Front Page
<img src='./projectImages/home_PhotoLabs.png' />
Clicking on a Post
<img src='./projectImages/post_PhotoLabs.png' />
Prompt user to Login
<img src='./projectImages/signIn_PhotoLabs.png' />
User Registration and Google Auth
<img src='./projectImages/register_PhotoLabs.png' />

## Mobile Interface

<img src='./projectImages/mobile_PhotoLabs.png' />

## Run Locally

- Run this command to clone repo

```
git clone git@github.com:syabdulr/snapshot.git
```
- run this command to start client page
```
cd client 
npm install
npm start
```
- run this command to start server (ensure you are in root directory of project)
```
cd server
npm install
npm start
```

## Features

- Authentication (Login/Signup) and with (Google)
- Create and Update Memories
- Like and Delete Memories
- View Other user's memories
- Recommended Posts
- Mobile Responsive
- Pagination
- Validation

## Tech Stack

- HTML5
- CSS3
- Javascript and ES+6
- Material-UI
- ReactJs
- Redux, Redux-Thunk
- NodeJs
- ExpressJs
- MongoDB Atlas

## Packages

- Frontend
- - axios
- - moment
- - redux
- - redux-thunk
- - @material-ui/core
- - @material-ui/icons
- - material-ui-chip-input
- - @material-ui/lab
- - react-file-base64
- - react-google-login (for google login feature)
- - jwt-decode (web tokens decoding)

- Backend
- - express
- - mongoose (for managing mongoDB)
- - cors
- - dotenv (for environment variables)
- - body-parser
- - nodemon
- - bcryptjs (for password hashing)
- - jsonwebtoken (for web tokens and sessions)

