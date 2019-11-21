var express = require("express");
var fs = require("fs");

var router = express.Router();
var path = require("path");
var route = "./src/static/";

router.get("/", function(req, res, next) {
  fs.readdir(route, (err, files) => {
    res.render("challenge", { files: files });
  });
});

router.get("/:id", function(req, res, next) {
  console.log(req.params.id);
  res.sendFile(path.resolve(route + req.params.id + "/index-FINISHED.html"));
});

module.exports = router;
