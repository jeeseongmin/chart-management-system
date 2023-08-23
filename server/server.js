const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, '/front/build')));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, '/front/build/index.html'))
})

app.listen(8080, function () {
  console.log('listening on 8080');
})