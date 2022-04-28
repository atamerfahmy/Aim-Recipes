// Import express
const express = require("express");
const mongoose = require("mongoose");
// const passport = require("passport");
// const flash = require("connect-flash");
// const session = require("express-session");
const cors = require("cors");
const path = require("path");
// const methodOverride = require("method-override");
const bodyParser = require("body-parser");
require('dotenv').config()

//Require Route Handlers
const recipes = require("./routes/recipes");

// Create the app
const app = express(); 

// Use it with post
app.use(express.json());
app.use(cors());


//Getting Mongo's connection URI
const db = require('./config/keys').mongoURI;

//Connecting to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

// Init middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/recipes', recipes);

app.get("/hello", (req, res) => {
  return res.json({
    data: "hello world"
  })
})

//production mode
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../client/build'));
  // Homepage
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"))
  );
} else {
  app.get('/', (req, res) => res.send('Homepage'));
}

// Handling 404
app.use((req, res) => {
  res.status(404).send({ err: 'We can not find what you are looking for' });
});

// Define the port, get it from the enviroment (used in production)
// Or just use 3000
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up and running on port ${port}`));
