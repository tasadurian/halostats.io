var express = require('express');
var router = express.Router();
var HaloAPI = require('haloapi');
var config = require("../config.js");
var h5 = new HaloAPI(config.apiKey);

var character = "Frankie";



router.get('/api/stats/player-matches', function(req, res) {
  h5.stats.playerMatches(character)
    .then(function(matches) {
      res.json(matches);
    })
    .catch(function(error) {
      console.log(error);
    });
});

router.get('/api/stats/arena-matches', function(req, res) {
  h5.stats.playerMatches({
      player: character,
      mode: "arena",
      start: 0,
      count: 10
    }).then(function(matches) {
      res.json(matches);
    })
    .catch(function(error) {
      console.log(error);
    });
});

router.get('/api/stats/warzone-matches', function(req, res) {
  h5.stats.playerMatches({
      player: character,
      mode: "warzone",
      start: 0,
      count: 10
    }).then(function(matches) {
      res.json(matches);
    })
    .catch(function(error) {
      console.log(error);
    });
});


module.exports = router;
