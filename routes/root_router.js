var express = require("express");
var root = express.Router();

root.get('/', function(req, res) {
  res.render("index", {
    news: req.app.get('newsFile').news,
    categ: req.app.get('categFile').categ,

  });
});

module.exports = root;
