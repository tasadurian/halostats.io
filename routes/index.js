var express = require('express');
var router = express.Router();
var HaloAPI = require('haloapi');
var config = require("../config.js");
var h5 = new HaloAPI(config.apiKey);

var character = "nN3o";

router.get('/', function(req, res) {
  res.sendfile('./views/index.html');
});

router.get('/api/profile/emblem-image', function(req, res) {
  h5.profile.emblemImage(character)
    .then(function(imageUrl) {
      res.json({
        "url": imageUrl
      });
    })
    .catch(function(error) {
      console.log(error);
    });
});

router.get('/api/profile/spartan-image', function(req, res) {
  h5.profile.spartanImage(character)
    .then(function(imageUrl) {
      res.json({
        "url": imageUrl
      });
    })
    .catch(function(error) {
      console.log(error);
    });
});

router.get('/api/stats/player-matches', function(req, res) {
  h5.stats.playerMatches(character)
    .then(function(matches) {
      res.json(matches);
    })
    .catch(function(error) {
      console.log(error);
    });
});

router.get('/api/stats/arena', function(req, res) {
  h5.stats.serviceRecordArena(character)
    .then(function(character) {
      res.json(character);
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
