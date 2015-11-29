var express = require('express');
var router = express.Router();
var HaloAPI = require('haloapi');
var config = require("../config.js");
var h5 = new HaloAPI(config.apiKey);

var character = "Frankie";

/* GET home page. */

router.get('/api/weapons', function(req, res) {
  h5.metadata.weapons()
    .then(function(weapons) {
      res.json(weapons);
    })
    .catch(function(error) {
      console.log(error);
    });
});

router.get('/api', function(req, res) {
  res.json({
    "api": "api"
  });
});

module.exports = router;
