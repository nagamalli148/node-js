const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/a", function (req, res) {
  const id = req.query.id;
  res.send("Welcome back" + id);
});

app.get("/a/:id", function (req, res) {
  const id = req.params.id;
  res.send("My World " + id);
});

app.listen(8000, function (req, res) {
  console.log("Running.....");
});
