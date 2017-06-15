var express = require("express");
var news = express.Router();

news.get('/items/:id', function(req, res) {
  var newsFile = req.app.get('newsFile');
  var id = req.params.id;
  var teller = 0;
  var item = "";
  while (teller < newsFile.news.length ) {
    if (newsFile.news[teller].id == id) {
      item = newsFile.news[teller];
    }
    teller++;
  }
  if (item !== "") {
    res.render("news", {
      item: item
    });
  } else {
    res.render("404", {});
  }
});

module.exports = news;
