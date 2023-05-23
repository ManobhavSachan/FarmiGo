const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require('./models/Users');
const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://farmigoApp:farmigo123@farmigocluster.f6fsnpu.mongodb.net/FarmigoBackend?retryWrites=true&w=majority"
);

app.get("/getProduct", (req, res) => {
  UserModel.find({})
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.post("/createProduct", (req, res) => {
  const user = req.body;
  const newUser = new UserModel(user);
  newUser.save();

  res.json(user);
});

app.listen(3001, () => {
  console.log("Server is running perfectly!");
});