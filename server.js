require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");


const PORT = process.env.PORT || 3000;

// Require all models
// const db = require("./models");

// Initialize Express
const app = express();

// Configure middleware
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
// app.use(express.static("public"));

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

const connection = mongoose.connection;
connection.on('connected', () => {
    console.log("Mongoose connected successfully");
});

connection.on('error', (err) => {
    console.log("Mongoose default connection error: " + err);
});

// When the server starts, create and save a new User document to the db
// The "unique" rule in the User model's schema will prevent duplicate users from being added to the server
// db.User.create({ name: "Ernest Hemingway" })
//   .then(function(dbUser) {
//     console.log(dbUser);
//   })
//   .catch(function(err) {
//     console.log(err.message);
//   });

// Routes

// Route for retrieving all Notes from the db
app.get("/menu", function(req, res) {
//   // Find all Notes
//   db.Note.find({})
//     .then(function(dbNote) {
//       // If all Notes are successfully found, send them back to the client
//       res.json(dbNote);
//     })
//     .catch(function(err) {
//       // If an error occurs, send the error back to the client
//       res.json(err);
//     });
res.json({"message": "success"});
});

// Route for saving a new Note to the db and associating it with a User
app.post("/submit", function(req, res) {
//   // Create a new Note in the db
//   db.Note.create(req.body)
//     .then(function(dbNote) {
//       // If a Note was created successfully, find one User (there's only one) and push the new Note's _id to the User's `notes` array
//       // { new: true } tells the query that we want it to return the updated User -- it returns the original by default
//       // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
//       return db.User.findOneAndUpdate({}, { $push: { notes: dbNote._id } }, { new: true });
//     })
//     .then(function(dbUser) {
//       // If the User was updated successfully, send it back to the client
//       res.json(dbUser);
//     })
//     .catch(function(err) {
//       // If an error occurs, send it back to the client
//       res.json(err);
//     });
});


// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
