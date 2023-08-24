const cors = require("cors");
const express = require("express");
const path = require("path");
const app = express();
require('dotenv').config();
const mongoose = require("mongoose");

const uri = `mongodb+srv://admin:${process.env.DB_PASSWORD}@system.pw6r10d.mongodb.net/?retryWrites=true&w=majority`
mongoose.connect(uri)
const db = mongoose.connection;

db.on('error', function () {
  console.log("Connection Failed!");
})

db.once("open", function () {
  console.log("Connected!")
})

app.use(express.json());
app.use(cors());

app.listen(8080, function () {
  console.log('listening on 8080');
})

app.use(express.static(path.join(__dirname, '../front/build')));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, '../front/build/index.html'))
})
