const express = require("express");
const app = express();
const phones = require("./phones.json");
const port = 5000;

app.get("/", (req, res) => {
  res.send("Look mama iphone server is running on nodemon");
});

app.get("/phones", (req, res) => {
  res.send(phones);
});

app.get("/phones/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let phone = phones.find((ph) => ph.id === id) || {};
  res.send(phone);
});

app.listen(port, () => {
  console.log("Express is running on port");
});
