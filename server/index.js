//importing the express library
const express = require("express");
// app represents the express application
const app = express();
// import models in order to find the data we want
const UserModel = require("./models/Users");

// it allows to connect to the api and react
const cors = require("cors");
// it handles errors
app.use(cors());

// import the body parser module
app.use(express.json());

/**
 * in order to create a connection between
 * the server and the database we need to import
 * the mongoose library.
 */
const mongoose = require("mongoose");
// connecting to the database
/**
 * inside the (), it takes ina string that represents the url of the database
 * which is the name of the database we want to connect to.
 */
mongoose.connect("mongodb+srv://emdwlekr:TBVxY7PnrLhBmUoS@cluster0.wuba1f8.mongodb.net/MERN_Tutorial?retryWrites=true&w=majority");

/**
 * creating bridge between backend and frontend => this is called 'api request'or 'api endpoint'
 */
// what this request does is that it will return the data from the database
// req => we can get information that is sent from the frontend
// res => we can send information from backoend to the frontend
app.get("/getUsers", (req, res) => {
  // find() is a method that will return all the data from the database
  // err => error
  // result => the data that is returned from the database
  UserModel.find({}, (err, result) => {
    // if there is an error, it will return the error
    if (err) {
      // if there is an error, it will return the error
      // json() is a method that will return the error in json format
      res.json(error);
    } else {
      // if there is no error, it will return the data
      // json() => it will return the data in json format
      res.json(result);
    }
  });
});

/**
 * Create POST request to add a new user
 */
app.post("/createUser", async (req, res) => {
  // when you make a request from the frontend, you can pass it like an object(the name of that object is 'body')
  const user = req.body;
  // create a new user
  const newUser = new UserModel(user);
  // save the user to the database
  // we can only do it by making this an 'async' function
  await newUser.save();

  // return back the user to the frontend
  res.json(user);
});

// tell my api to start listening on port 3001 / 3000 is for react
// () => is a callback function that is called when the server is started
app.listen(3001, () => {
  console.log("Server started on port 3001");
});
