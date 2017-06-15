var express = require("express");
var categ = express.Router();

categ.get('/categ/:id', function(req, res) {
  res.render("categorie", {
      id: Number(req.params.id),
      items: req.app.get('newsFile').news,
      categ: req.app.get('categFile').categ
  });
});

module.exports = categ;
