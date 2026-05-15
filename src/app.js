const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Azure CI/CD 🚀");
});

module.exports = app;